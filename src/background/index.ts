import { sendToContentScript } from "@plasmohq/messaging"

// Register a keyboard shortcut
chrome.commands.onCommand.addListener(function (command) {
  console.log("start-capture backend", command)
  if (command === "start-capture") {
    sendToContentScript({
      name: "start-capture"
    })
  }
})
