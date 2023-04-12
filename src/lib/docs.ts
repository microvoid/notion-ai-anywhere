import { MainPageMessage } from "./enums"

export const isDocs = () => {
  const url = location.href
  // return url.includes("docs.corp.kuaishou.com/d")
  return /docs.*corp\.kuaishou\.com.*\/d\/home/.test(url)
}

export const getPositionBySpacerIndex = () => {
  const selectionEnd =
    window.Docs.Word.editor.getSelection()?.selectedRanges?.[0]?.end
  // const position = window.Docs.Word.editor.getAbsolutePositionAtCursor()
  if (selectionEnd) {
    const position =
      window.Docs.Word.editor.getPositionBySpacerIndex?.(selectionEnd)
    return position || null
  }

  return null
}

export const getAbsolutePositionAtCursor = () => {
  const position = window.Docs.Word.editor.getAbsolutePositionAtCursor?.()
  return position || null
}

export const getDocsSelectionChar = () => {
  let selectionText = ""
  try {
    const selection = window.Docs.Word.editor.getSelection()
    const range = selection.selectedRanges
    if (!range?.[0]?.start) {
      return selectionText
    }

    let start = range?.[0].start
    const end = range?.[0].end

    while (start <= end) {
      const t = window.Docs.Word.editor.getCharAt(start)
      selectionText += t
      start += 1
    }
  } catch (error) {
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

export const getMainAbsolutePositionAtCursor = () => {
  const ele = document.getElementById(MainPageMessage.PAGE_CONTENT_MESSAGE_ELE)
  if (!ele) {
    return ""
  }
  ele.setAttribute("data-type", MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR)
  ele?.click()
  const position =
    ele.getAttribute(MainPageMessage.GET_ABSOLUTE_POSITION_AT_CURSOR) || ""
  return position ? JSON.parse(position) : ""
}

export const getMainPositionBySpacerIndex = () => {
  const ele = document.getElementById(MainPageMessage.PAGE_CONTENT_MESSAGE_ELE)
  if (!ele) {
    return ""
  }
  ele.setAttribute("data-type", MainPageMessage.GET_POSITION_BY_SPACER_INDEX)
  ele?.click()
  const position =
    ele.getAttribute(MainPageMessage.GET_POSITION_BY_SPACER_INDEX) || ""
  return position ? JSON.parse(position) : ""
}
