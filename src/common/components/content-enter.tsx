import { CSSProperties, useCallback, useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { IPosition, _calcPosition, getSelectionText, storage } from "~lib"
import { isDocs } from "~lib/docs"
import { ConstEnum } from "~lib/enums"

import BtnIcon from "../icons/notion-icon.png"

interface IContentEnterProps {
  isPanelShow: boolean
  showPanel?: ({
    // position,
    selectionText
  }: {
    // position: IPosition
    selectionText: string
  }) => void
}

let selectionText = ""
const ContentEnter = (props: IContentEnterProps) => {
  const { isPanelShow, showPanel } = props
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState<IPosition>()

  const [closeSelectionIcon] = useStorage({
    key: ConstEnum.CLOSE_SELECTION_ICON,
    instance: storage
  })

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      selectionText = getSelectionText()

      // 如果选区有内容，直接触发
      if (selectionText) {
        // const range = selection?.getRangeAt(0)
        // const rect = range?.getBoundingClientRect()
        setPosition(
          _calcPosition(
            e
            // rects
            //   ? {
            //       clientX: rect.x + rect.width / 2,
            //       clientY: rect.y + rect.height
            //     }
            //   : e
          )
        )
        setShow(true)
        return
      } else if (show || isPanelShow) {
        setShow(false)
      }
    },
    [show, isPanelShow]
  )

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [onMouseUp])

  useEffect(() => {
    if (show && isDocs()) {
      setTimeout(() => {
        const quickBar = document.querySelector(
          ".k-vodka-plugin-selection-bar .k-plugin-quick-bar"
        )

        if (
          quickBar &&
          quickBar.lastChild &&
          !quickBar.lastChild.className.includes("notion-ai-anywhere-btn")
        ) {
          const span = document.createElement("span")
          span.className =
            "notion-ai-anywhere-btn style-item common-add-comment"
          span.style.cursor = "pointer"
          span.innerHTML = `<img src="${BtnIcon}" width="90%" height="90%"><img>`
          span.onclick = (e) => {
            e.stopPropagation()
            e.preventDefault()
            showPanel?.({
              selectionText
            })
          }
          quickBar.appendChild(span)
        }
      }, 300)
    }
  }, [show])

  if (!show || isDocs() || closeSelectionIcon) {
    return null
  }

  const buttonStyle: CSSProperties = {}
  if (position && position.buttonX) {
    buttonStyle.left = position.buttonX
    buttonStyle.top = position.buttonY
  }

  return (
    <div
      className="fixed"
      style={buttonStyle}
      onClick={(e) => {
        e.stopPropagation()
        setShow(false)
        showPanel?.({
          selectionText
        })
      }}>
      <img
        src={BtnIcon}
        className=" rounded-lg cursor-pointer w-8 h-8 shadow-sm hover:shadow-2xl"></img>
    </div>
  )
}

export default ContentEnter
