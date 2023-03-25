import ndjsonStream from "can-ndjson-stream"
import { type } from "os"
import { v4 as uuidv4 } from "uuid"

import { PromptTypeEnum } from "~lib/enums"
import type { INotionSpace, IPostNotionProgress } from "~lib/types/notion"

const MODEL = "openai-3"
const HOST = "https://www.notion.so"

async function PostNotion(params: {
  promptType?: string
  context?: string
  notionSpaceId?: string
  prompt?: string
  previousContent?: string
  // language?: string
  // tone?: string
  onProgress?: (params: IPostNotionProgress) => void
}): Promise<string> {
  const {
    promptType,
    context,
    notionSpaceId,
    prompt,
    previousContent,
    // language,
    // tone,
    onProgress
  } = params
  if (!notionSpaceId) {
    return "Please set notionSpaceId in options page"
  }

  const url = `${HOST}/api/v3/getCompletion`
  // const data = {
  //   id: uuidv4(),
  //   model: MODEL,
  //   spaceId: notionSpaceId,
  //   isSpacePermission: false,
  //   context: {
  //     // pageTitle,
  //     pageContent: "",
  //     prompt: prompt || "帮我翻译成日文",
  //     selectedText: context,
  //     type: "helpMeEdit"
  //   }
  // }
  const data = {
    id: uuidv4(),
    model: MODEL,
    spaceId: notionSpaceId,
    isSpacePermission: false,
    context: {}
  }

  const [type, context2] = promptType?.split("-") || []
  console.log(promptType, type, context2)

  if (prompt) {
    data.context = {
      pageContent: "",
      prompt: prompt,
      selectedText: context,
      type: "helpMeEdit"
    }
  }

  if (type === PromptTypeEnum.Translate) {
    data.context = {
      type,
      text: context,
      language: context2
    }
  } else if (type === PromptTypeEnum.HelpMeWrite) {
    data.context = {
      type,
      prompt: prompt,
      previousContent: context
    }
  } else if (type === PromptTypeEnum.ChangeTone) {
    data.context = {
      type,
      text: context,
      tone: context2
    }
  } else if (type === PromptTypeEnum.TopicWriting) {
    data.context = {
      type: prompt,
      topic: context,
      pageContent: ""
    }
  } else if (type === PromptTypeEnum.ContinueWriting) {
    data.context = {
      type,
      previousContent: previousContent || context,
      restContent: previousContent ? context : ""
    }
  } else {
    data.context = {
      type: promptType,
      selectedText: context
    }
  }
  console.log(`request body: ${JSON.stringify(data)}`)
  let headers = {
    accept: "application/x-ndjson",
    "Content-Type": "application/json"
  }
  console.log(`request headers: ${JSON.stringify(headers)}`)
  console.log(`request url: ${url}`)
  console.log(`request data: ${JSON.stringify(data)}`)

  const resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then((response) => {
      return ndjsonStream(response.body) //ndjsonStream parses the response.body
    })
    .then((exampleStream) => {
      return new Promise((resolve) => {
        const reader = exampleStream.getReader()
        let read
        reader.read().then(
          (read = (result) => {
            // console.log(result)
            onProgress?.(result)
            if (result.done) {
              resolve(undefined)
              return
            }

            reader.read().then(read)
          })
        )
      })
    })

  // console.log(resp)

  // if (resp.status == 200) {
  //   let resData = await resp.text()
  //   if (!resData || resData === "" || resData === "[]") {
  //     return "Get response error, empty response"
  //   }
  //   let rData = resData.match(/.+/g).map((tmp) => JSON.parse(tmp))
  //   // console.log(rData)

  //   const texts = rData.map((tmp) => {
  //     return tmp.type == "success" ? tmp.completion : tmp.message
  //   })
  //   console.log(texts, "texts")
  //   return texts.join("").trim()
  // } else {
  //   console.log(`fail: ${resp.status}`)
  //   return await resp.text()
  // }
}

async function GetSpaces() {
  const url = `${HOST}/api/v3/getSpaces`

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (res.status == 200) {
    const data = (await res.json()) as Map<string, any>
    let spaces: INotionSpace[] = []

    for (const [key, value] of Object.entries(data)) {
      const sdata = value.space
      for (const [skey, svalue] of Object.entries(sdata)) {
        const space = svalue.value as INotionSpace
        spaces.push({
          id: space.id,
          name: space.name,
          icon: space.icon
        })
      }
    }
    console.log(
      `get notion spaces success: ${spaces.length} spaces, ${JSON.stringify(
        spaces
      )}}`
    )
    return spaces
  } else {
    console.log(`get notion spaces failed: ${res.status}`)
    return []
  }
}

export { PostNotion, GetSpaces }
