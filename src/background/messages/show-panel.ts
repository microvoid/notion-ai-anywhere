import { PlasmoMessaging, sendToContentScript } from "@plasmohq/messaging"

export const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  sendToContentScript({
    name: "show-panel",
    body: req.body
  })
}

export default handler
