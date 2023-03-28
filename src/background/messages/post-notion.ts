import { PlasmoMessaging, sendToContentScript } from "@plasmohq/messaging"

import { PostNotion } from "~lib/api/notion"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"
import type { INotionSpace, IPostNotionProgress } from "~lib/types/notion"

// sendToContentScript({
//   type: "post-notion"
// })
// getActiveTab
export const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const space = await storage.get<INotionSpace>(ConstEnum.USED_NOTION_SPACE)
  const body = req.body
  console.log("post-notion", req)
  const { promptType, prompt, context } = body
  const text = await PostNotion({
    promptType,
    prompt,
    context,
    notionSpaceId: space.id,
    onProgress: (data: IPostNotionProgress) => {
      sendToContentScript({
        tabId: req.tabId,
        body: data,
        name: "post-notion-progress"
      })
    }
  })
  // console.log(spaces)
  //   await storage.set(ConstEnum.NOTION_SPACES, JSON.stringify(spaces))
  res.send(`post notion success: ${text}`)
}

export default handler
