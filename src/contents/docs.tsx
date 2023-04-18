import type { PlasmoCSConfig } from "plasmo"

import { sendToBackground } from "@plasmohq/messaging"

import {
  getAbsolutePositionAtCursor,
  getDocsSelectionChar,
  getPositionBySpacerIndex,
  insertDocsSelectionChar,
  replaceDocsSelectionChar
} from "~lib/docs"
import { MainPageMessage } from "~lib/enums"
import { logoBase64 } from "~lib/logo-base64"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
  all_frames: false
}

const ele = document.createElement("div")
ele.id = MainPageMessage.PAGE_CONTENT_MESSAGE_ELE
document.body.appendChild(ele)

document.addEventListener(
  MainPageMessage.PAGE_CONTENT_MESSAGE_EVENT,
  function () {
    var type = ele.getAttribute("data-type")

    console.log(type, "clicktype")

    switch (type) {
      case MainPageMessage.GET_SELECTION_CHAR:
        const selectionText = getDocsSelectionChar()
        ele.setAttribute(MainPageMessage.SELECTION_CHAR, selectionText)
        break

      case MainPageMessage.SELECTION_INSERT: {
        const text = ele.getAttribute(MainPageMessage.SELECTION_CHAR) || ""
        insertDocsSelectionChar(text)
        break
      }

      case MainPageMessage.SELECTION_REPLACE: {
        const text = ele.getAttribute(MainPageMessage.SELECTION_CHAR) || ""
        replaceDocsSelectionChar(text)
        break
      }

      case MainPageMessage.GET_POSITION_BY_SPACER_INDEX: {
        const position = getPositionBySpacerIndex()
        ele.setAttribute(
          MainPageMessage.GET_POSITION_BY_SPACER_INDEX,
          JSON.stringify(position)
        )
        break
      }

      case MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR: {
        const position = getAbsolutePositionAtCursor()
        ele.setAttribute(
          MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR,
          JSON.stringify(position)
        )
        break
      }

      case "__trackerScriptEnd__":
        break
    }
  }
)

export default function () {
  return null
}

let cCharIndex = -1
const isQuickInsertShow = (data: string | null) => {
  const selection = window.Docs.Word.editor.getSelection()
  if (selection.selectedRanges.length > 0) return false
  const charIndex = window.Docs.Word.editor.getCharIndexAtCursor()
  cCharIndex = charIndex
  const beforeChar = window.Docs.Word.editor.getCharAt(charIndex - 1)
  const isFirst = beforeChar == " " || beforeChar == "\n"
  if ((data == "/" || data == "、") && isFirst) {
    return true
  }
  return false
}

let applied = false

const applyPlugin = () => {
  window.Docs.Word.onLoad(() => {
    if (applied) {
      return
    }
    applied = true

    setTimeout(() => {
      window.vodkaapp.pluginManager_.applyPlugin(() => {
        return {
          pluginName: "notion-ai-anywhere",
          onInit: () => {
            console.log("notion-ai-anywhere docs plugin init")
          },
          onBeforeInput: (event) => {
            try {
              if (isQuickInsertShow(event.data)) {
                const menu = document.querySelector(
                  "#k-frame-only-insert-menu .k-frame-toolbar-menu-main"
                )
                const firstChild = menu?.firstChild
                if (
                  firstChild &&
                  !firstChild.className.includes("notion-ai-anywhere-btn")
                ) {
                  const el = document.createElement("div")
                  el.className =
                    "notion-ai-anywhere-btn ant-menu-item notion-ai-anywhere-btn k-frame-toolbar-menu-item  menu-item-heading0"
                  el.style.cursor = "pointer"
                  el.style.display = "flex"
                  el.style.alignItems = "center"
                  el.addEventListener("mouseover", () => {
                    el.style.backgroundColor = "rgb(167, 130, 195, 0.1)"
                  })
                  el.addEventListener("mouseout", () => {
                    el.style.backgroundColor = "transparent"
                  })
                  el.innerHTML = `<img src="${logoBase64}" width="20px" height="20px" style="margin-right: 10px;"><img><span className="k-frame-toolbar-menu-item-label" style="color: rgb(167, 130, 195); font-weight: bolder;">Ask AI</span>`
                  el.onclick = (e) => {
                    e.stopPropagation()
                    e.preventDefault()

                    const ele = document.getElementById(
                      MainPageMessage.PAGE_CONTENT_MESSAGE_ELE
                    )

                    if (!ele) {
                      return ""
                    }

                    ele.setAttribute("data-type", MainPageMessage.SHOW_PANEL)
                    ele?.click()

                    if (cCharIndex > 0) {
                      window.Docs.Word.editor.deleteRange(
                        cCharIndex,
                        cCharIndex
                      )
                    }

                    // sendToBackground({
                    //   name: "show-panel",
                    //   body: {}
                    // }).then((e) => {
                    //   console.log(e, "notion ai apllying fdsfds")
                    // })
                    // showPanel?.({
                    //   selectionText
                    // })
                  }
                  menu.insertBefore(el, firstChild)
                  // quickBar.appendChild(el)
                }
              }
            } catch (error) {
              console.log("notion ai plugin", error)
            }
          }
        }
      })
    }, 500)
  })
}

document.addEventListener("Docs.Word.Loaded", () => {
  setTimeout(() => {
    applyPlugin()
  }, 200)
})

if (window.Docs?.Word?.onLoad) {
  applyPlugin()
}

console.info("Notion AI anywhere docs loaded")
