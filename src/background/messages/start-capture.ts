import type { PlasmoMessaging } from "@plasmohq/messaging"

import { getActiveTab } from "~lib"

export const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const ac = await getActiveTab()
  chrome.tabs.captureVisibleTab(
    ac.windowId,
    {
      format: "png",
      quality: 100
    },
    function (dataUrl) {
      res.send(dataUrl)
    }
  )
}

export default handler
