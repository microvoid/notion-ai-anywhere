import cssText from "data-text:~styles.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import { useMessage } from "@plasmohq/messaging/hook"
import { useStorage } from "@plasmohq/storage/hook"

// import "~base.css"

import ContentEnter from "~common/components/content-enter"
import ContentPanel from "~common/components/content-panel"
import { IPosition, getSelectionText, storage } from "~lib"
import { ConstEnum } from "~lib/enums"
import { setToastContainerEle } from "~lib/toast"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [showPanel, setShowPanel] = useState(false)
  // const [position, setPosition] = useState<IPosition>()
  const [selectionText, setSelectionText] = useState<string>("")

  useMessage<string, string>(async (req, res) => {
    if (req.name === "show-panel") {
      const t = getSelectionText()
      if (t) {
        setSelectionText(t)
        setShowPanel(true)
      }
    }
  })

  const [darkMode] = useStorage({
    key: ConstEnum.DARK_MODE,
    instance: storage
  })

  console.log(darkMode, "darkMode1")

  return (
    <div
      style={{
        zIndex: 999999
      }}
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
        showPanel={({
          // position,
          selectionText
        }: {
          position: IPosition
          selectionText: string
        }) => {
          // setPosition(position)
          setSelectionText(selectionText)
          setShowPanel(true)
        }}></ContentEnter>
      <ContentPanel
        show={showPanel}
        selectionText={selectionText}
        // position={position}
        onClose={() => {
          setShowPanel(false)
          // setPosition(undefined)
        }}></ContentPanel>
    </div>
  )
}

export default PlasmoOverlay
