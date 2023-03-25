import ndjsonStream from "can-ndjson-stream"
import { type } from "os"
import { v4 as uuidv4 } from "uuid"

import { PromptTypeEnum } from "~lib/enums"
import type { INotionSpace } from "~types/notion"

const MODEL = "openai-3"
const HOST = "https://www.notion.so"

async function PostNotion(params: {
  promptType?: string
  context?: string
  notionSpaceId?: string
  prompt?: string
  language?: string
  tone?: string
  onProgress?: ({ type, text }: { type: string; text: string }) => void
}): Promise<string> {
  const {
    promptType,
    context,
    notionSpaceId,
    prompt,
    language,
    tone,
    onProgress
  } = params
  if (!notionSpaceId) {
    return "Please set notionSpaceId in options page"
  }

  const url = `${HOST}/api/v3/getCompletion`
  const data = {
    id: uuidv4(),
    model: MODEL,
    spaceId: notionSpaceId,
    isSpacePermission: false,
    context: {
      // pageTitle,
      pageContent: "",
      prompt: prompt || "帮我翻译成日文",
      selectedText: context,
      type: "helpMeEdit"
    }
  }
  // const data = {
  //   id: uuidv4(),
  //   model: MODEL,
  //   spaceId: notionSpaceId,
  //   isSpacePermission: false,
  //   context: {}
  // }

  // if (promptType === PromptTypeEnum.Translate) {
  //   data.context = {
  //     type: "translate",
  //     text: context,
  //     language: language
  //   }
  // } else if (promptType === PromptTypeEnum.HelpMeWrite) {
  //   data.context = {
  //     type: "helpMeWrite",
  //     prompt: prompt,
  //     previousContent: context
  //   }
  // } else if (promptType === PromptTypeEnum.ChangeTone) {
  //   data.context = {
  //     type: "changeTone",
  //     text: context,
  //     tone: tone
  //   }
  // } else if (promptType === PromptTypeEnum.TopicWriting) {
  //   data.context = {
  //     type: prompt,
  //     topic: context,
  //     pageContent: ""
  //   }
  // } else {
  //   data.context = {
  //     type: promptType,
  //     selectedText: context
  //   }
  // }
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
            if (result.done) {
              resolve(undefined)
              return
            }

            // console.log(result.value)
            onProgress(result.value)
            reader.read().then(read)
          })
        )
      })
    })

  console.log(resp)

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
