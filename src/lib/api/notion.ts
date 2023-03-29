import ndjsonStream from "can-ndjson-stream"
import { v4 as uuidv4 } from "uuid"

import { ConstEnum, PromptTypeEnum } from "~lib/enums"
import { storage } from "~lib/storage"
import type { INotionSpace, IPostNotionProgress } from "~lib/types/notion"

const MODEL = "openai-3"
const HOST = "https://www.notion.so"

async function PostNotion(params: {
  promptType?: string
  context?: string
  notionSpaceId?: string
  prompt?: string
  previousContent?: string
  onProgress?: (params: IPostNotionProgress) => void
}): Promise<any> {
  const {
    promptType,
    context,
    notionSpaceId,
    prompt,
    previousContent,
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
    context: {}
  }

  const [type, context2] = promptType?.split("-") || []

  if (prompt) {
    data.context = {
      pageContent: context,
      prompt: prompt,
      selectedText: context,
      type: "helpMeEdit"
    }
  } else if (type === PromptTypeEnum.Translate) {
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
      type: context2,
      topic: prompt,
      pageContent: context,
      selectedText: context
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
    storage.set(ConstEnum.NOTION_IS_LOGIN, 1)
    return spaces
  } else {
    console.log(`get notion spaces failed: ${res.status}`)
    if (res.status === 401) {
      storage.remove(ConstEnum.NOTION_IS_LOGIN)
      storage.remove(ConstEnum.USED_NOTION_SPACE)
    }
    return []
  }
}

export { PostNotion, GetSpaces }
