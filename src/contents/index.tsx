import cssText from "data-text:~styles/main.css"
import type { PlasmoCSConfig } from "plasmo"
import { useCallback, useEffect, useState } from "react"

import { useMessage } from "@plasmohq/messaging/hook"
import { useStorage } from "@plasmohq/storage/hook"

// import "~base.css"

import ContentEnter from "~common/components/content-enter"
import AutoPanel from "~common/components/content-panel"
import { IPosition, getSelectionText, stopPropagation, storage } from "~lib"
import { ConstEnum } from "~lib/enums"
import { setToastContainerEle } from "~lib/toast"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: false
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [isPanelShow, setIsPanelShow] = useState(false)
  const [selectionText, setSelectionText] = useState<string>("")

  useMessage<
    {
      selectionText: string
    },
    any
  >(async (req, res) => {
    if (req.name === "show-panel") {
      if (req.body?.selectionText) {
        setSelectionText(req.body?.selectionText)
      } else {
        const t = getSelectionText()
        if (t) {
          setSelectionText(t)
        }
      }

      setIsPanelShow(!isPanelShow)
    }
  })

  const [darkMode] = useStorage({
    key: ConstEnum.DARK_MODE,
    instance: storage
  })

  useEffect(() => {
    const closePanel = () => {
      setIsPanelShow(false)
    }
    document.addEventListener("mouseup", closePanel)
    return () => {
      window.removeEventListener("mouseup", closePanel)
    }
  }, [])

  return (
    <div
      style={{
        zIndex: 999999
      }}
      onMouseUp={stopPropagation}
      data-theme={darkMode ? "dark" : "light"}>
      <div
        id={ConstEnum.TOAST_CONTAINER}
        className="fixed"
        style={{
          zIndex: 1001
        }}
        ref={(ref) => {
          setToastContainerEle(ref)
        }}></div>
      <ContentEnter
        isPanelShow={isPanelShow}
        showPanel={({
          // position,
          selectionText
        }: {
          position: IPosition
          selectionText: string
        }) => {
          // setPosition(position)
          setSelectionText(selectionText)
          setIsPanelShow(true)
        }}></ContentEnter>
      <AutoPanel
        show={isPanelShow}
        selectionText={selectionText}
        // position={position}
        onClose={() => {
          setIsPanelShow(false)
          setSelectionText("")
        }}
        setSelectionText={setSelectionText}></AutoPanel>
    </div>
  )
}

console.info("Notion AI anywhere content loaded")
export default PlasmoOverlay
