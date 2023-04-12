import type { PlasmoCSConfig } from "plasmo"

import {
  getAbsolutePositionAtCursor,
  getDocsSelectionChar,
  getPositionBySpacerIndex,
  insertDocsSelectionChar,
  replaceDocsSelectionChar
} from "~lib/docs"
import { MainPageMessage } from "~lib/enums"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
  all_frames: false
}

const ele = document.createElement("div")
ele.id = MainPageMessage.PAGE_CONTENT_MESSAGE_ELE
document.body.appendChild(ele)

ele.addEventListener("click", function () {
  var type = this.getAttribute("data-type")

  console.log(type, "clicktype")

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

    case MainPageMessage.GET_POSITION_BY_SPACER_INDEX: {
      const position = getPositionBySpacerIndex()
      this.setAttribute(
        MainPageMessage.GET_POSITION_BY_SPACER_INDEX,
        JSON.stringify(position)
      )
      break
    }

    case MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR: {
      const position = getAbsolutePositionAtCursor()
      this.setAttribute(
        MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR,
        JSON.stringify(position)
      )
      break
    }

    case "__trackerScriptEnd__":
      break
  }
})

export default function () {
  return null
}

console.info("Notion AI anywhere docs loaded")
