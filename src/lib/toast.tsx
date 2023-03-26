import React from "react"
import * as ReactDOMClient from "react-dom/client"

import Toast from "~common/components/toast"

let containerElement: HTMLDivElement | null = null
let root

export const getToastContainerEle = () => {
  return containerElement
}

export const setToastContainerEle = (ele: HTMLDivElement | null) => {
  containerElement = ele
}

export const showToast = (text: string) => {
  const c = getToastContainerEle()
  if (!c) {
    return
  }
  if (!root) {
    root = ReactDOMClient.createRoot(c)
  }

  // Initial render: Render an element to the root.
  root.render(<Toast message={text} id={Date.now()} />)
}
