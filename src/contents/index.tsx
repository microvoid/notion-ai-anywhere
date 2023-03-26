import cssText from "data-text:~styles.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

// import "~base.css"

import ContentEnter from "~common/components/content-enter"
import ContentPanel from "~common/components/content-panel"
import type { IPosition } from "~lib"
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
  const [position, setPosition] = useState<IPosition>()
  const [selectionText, setSelectionText] = useState<string>("")

  return (
    <div
      style={{
        zIndex: 999999
      }}>
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
          position,
          selectionText
        }: {
          position: IPosition
          selectionText: string
        }) => {
          setPosition(position)
          setSelectionText(selectionText)
          setShowPanel(true)
        }}></ContentEnter>
      <ContentPanel
        show={showPanel}
        selectionText={selectionText}
        // position={position}
        onClose={() => {
          setShowPanel(false)
          setPosition(undefined)
        }}></ContentPanel>
    </div>
  )
}

export default PlasmoOverlay
