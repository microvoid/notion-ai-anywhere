import type { PlasmoCSConfig } from "plasmo"

import {
  getDocsSelectionChar,
  insertDocsSelectionChar,
  replaceDocsSelectionChar
} from "~lib/docs"
import { MainPageMessage } from "~lib/enums"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

const ele = document.createElement("div")
ele.id = MainPageMessage.PAGE_CONTENT_MESSAGE_ELE
document.body.appendChild(ele)

ele.addEventListener("click", function () {
  var type = this.getAttribute("data-type")

  switch (type) {
    case MainPageMessage.GET_SELECTION_CHAR:
      const selectionText = getDocsSelectionChar()
      this.setAttribute(MainPageMessage.SELECTION_CHAR, selectionText)
      break

    case MainPageMessage.SELECTION_INSERT: {
      const text = this.getAttribute(MainPageMessage.SELECTION_CHAR) || ""
      insertDocsSelectionChar(text)
      break
    }

    case MainPageMessage.SELECTION_REPLACE: {
      const text = this.getAttribute(MainPageMessage.SELECTION_CHAR) || ""
      replaceDocsSelectionChar(text)
      break
    }
    case "__trackerScriptEnd__":
      break
  }
})

console.info("Notion AI anywhere docs loaded")
