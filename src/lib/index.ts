import { getMainSelectionChar, isDocs } from "./docs"

export * from "./position"
export * from "./storage"

export const preventDefault = (e: any) => {
  e.preventDefault()
}

export const stopPropagation = (e: any) => {
  e.stopPropagation()
}

export const preventDefaultAndStopPropagation = (e: any) => {
  e.stopPropagation()
  e.preventDefault()
}

export const getActiveTab = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  return tab
}

export const getSelectionText = () => {
  const selection = window.getSelection()
  const str = selection?.toString().trim()
  let selectionText = str || ""

  if (isDocs()) {
    console.log(isDocs)
    selectionText = getMainSelectionChar() || ""
    console.log(selectionText, "selectionTex33")
  }
  return selectionText
}
