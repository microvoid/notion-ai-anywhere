import { sendToContentScript } from "@plasmohq/messaging"

// Register a keyboard shortcut
chrome.commands.onCommand.addListener(function (command) {
  if (command === "show-panel") {
    sendToContentScript({
      name: "show-panel"
    })
  }
})
