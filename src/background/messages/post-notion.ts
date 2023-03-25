import type { PlasmoMessaging } from "@plasmohq/messaging"

import { PostNotion } from "~lib/api/notion"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"
import type { INotionSpace } from "~types/notion"

// sendToContentScript({
//   type: "post-notion"
// })
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  // console.log(1111)
  const space = await storage.get<INotionSpace>(ConstEnum.USED_NOTION_SPACE)
  // console.log(space)
  const body = req.body
  const spaces = await PostNotion({
    context: body.context,
    notionSpaceId: space.id
    // onProgress: body.onProgress
  })
  console.log(spaces)
  //   await storage.set(ConstEnum.NOTION_SPACES, JSON.stringify(spaces))
  //   res.send(`get notion spaces success: ${spaces.length} spaces`)
}

export default handler
