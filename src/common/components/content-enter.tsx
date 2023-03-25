import {
  CSSProperties,
  useCallback,
  useEffect,
  useReducer,
  useState
} from "react"

import { IPosition, _calcPosition } from "~lib"

import BtnIcon from "../icons/notion-icon.png"

interface IContentEnterProps {
  showPanel?: ({
    position,
    selectionText
  }: {
    position: IPosition
    selectionText: string
  }) => void
}

let selectionText = ""
const ContentEnter = (props: IContentEnterProps) => {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState<IPosition>()
  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      const selection = window.getSelection()
      const str = selection?.toString().trim()
      selectionText = str || ""
      // 如果选区有内容，直接触发
      if (str) {
        const range = selection?.getRangeAt(0)
        console.log(range, "range", selection)
        const rect = range?.getBoundingClientRect()
        // const obj
        console.log(str, rect, selection, "selection")
        //   console.log(_calcPosition(e))
        setPosition(
          _calcPosition(
            rect
              ? {
                  clientX: rect.x + rect.width / 2,
                  clientY: rect.y + rect.height
                }
              : e
          )
        )
        setShow(true)
        return
      } else if (show) {
        setShow(false)
      }
    },
    [show]
  )

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [onMouseUp])

  if (!show) {
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
      onClick={() => {
        setShow(false)
        console.log(selectionText, "selectionText")
        props.showPanel?.({
          position,
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
