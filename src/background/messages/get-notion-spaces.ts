import type { PlasmoMessaging } from "@plasmohq/messaging"

import { GetSpaces } from "~lib/api/notion"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(1111)
  const spaces = await GetSpaces()
  console.log(spaces)
  //   await storage.set(ConstEnum.NOTION_SPACES, JSON.stringify(spaces))
  //   res.send(`get notion spaces success: ${spaces.length} spaces`)
}

export default handler
