import { MainPageMessage } from "./enums"

export const isDocs = () => {
  const url = location.href
  return url.includes("docs.corp.kuaishou.com/d")
}

export const getDocsSelectionChar = () => {
  let selectionText = ""
  try {
    const selection = window.Docs.Word.editor.getSelection()
    const range = selection.selectedRanges
    if (!range?.[0].start) {
      return selectionText
    }

    let start = range?.[0].start
    const end = range?.[0].end

    while (start <= end) {
      const t = window.Docs.Word.editor.getCharAt(start)
      // console.log(t)
      selectionText += t
      start += 1
    }
  } catch (error) {
    console.log(error, "error")
    // selectionText = ''
  }

  return selectionText
}

export const replaceDocsSelectionChar = (text: string) => {
  const selection = window.Docs.Word.editor.getSelection()
  const range = selection.selectedRanges
  const start = range?.[0].start
  const end = range?.[0].end
  window.Docs.Word.editor.deleteRange(start, end)
  window.Docs.Word.editor.insertText(text, start)
}

export const insertDocsSelectionChar = (text: string) => {
  const selection = window.Docs.Word.editor.getSelection()
  const range = selection.selectedRanges

  const curCursor =
    range[0].end || window.Docs.Word.editor.getCharIndexAtCursor()
  window.Docs.Word.editor.insertText(text, curCursor)
}

export const getMainSelectionChar = () => {
  const ele = document.getElementById(MainPageMessage.PAGE_CONTENT_MESSAGE_ELE)
  if (!ele) {
    return ""
  }
  ele.setAttribute("data-type", MainPageMessage.GET_SELECTION_CHAR)
  ele?.click()
  const selectionText = ele.getAttribute(MainPageMessage.SELECTION_CHAR) || ""
  return selectionText
}

export const insertMainSelectionChar = (text: string) => {
  const ele = document.getElementById(MainPageMessage.PAGE_CONTENT_MESSAGE_ELE)
  if (!ele) {
    return ""
  }
  ele.setAttribute(MainPageMessage.SELECTION_CHAR, text)
  ele.setAttribute("data-type", MainPageMessage.SELECTION_INSERT)
  ele?.click()
}

export const replaceMainSelectionChar = (text: string) => {
  const ele = document.getElementById(MainPageMessage.PAGE_CONTENT_MESSAGE_ELE)
  if (!ele) {
    return ""
  }
  ele.setAttribute(MainPageMessage.SELECTION_CHAR, text)
  ele.setAttribute("data-type", MainPageMessage.SELECTION_REPLACE)
  ele?.click()
}
