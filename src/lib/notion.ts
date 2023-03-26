import { sendToBackground } from "@plasmohq/messaging"

import type { IPostNotionProgress } from "./types/notion"

let onProgressHandler: ((data: IPostNotionProgress) => void) | undefined

const handlePostNotionProgress = (message: any) => {
  if (message.name === "post-notion-progress") {
    onProgressHandler?.(message.body)
  }

  console.log("[APP] Received message from background script:", message)
}

const postNotionAddEventListener = () => {
  chrome.runtime.onMessage.addListener(handlePostNotionProgress)
}

const postNotionRemoveEventListener = () => {
  chrome.runtime.onMessage.removeListener(handlePostNotionProgress)
}

export const sendNotionPostToBackground = ({
  promptType,
  prompt,
  context,
  onProgress
}: {
  promptType?: string
  context?: string
  prompt?: string
  onProgress: (data: IPostNotionProgress) => void
}) => {
  onProgressHandler = onProgress
  postNotionAddEventListener()
  return new Promise(async (resolve) => {
    const response = await sendToBackground({
      name: "post-notion",
      body: {
        promptType,
        prompt,
        context
        // notionSpaceId: notionSpace.id
      }
    })
    postNotionRemoveEventListener()
    onProgressHandler = undefined
    resolve(undefined)
  })
}
