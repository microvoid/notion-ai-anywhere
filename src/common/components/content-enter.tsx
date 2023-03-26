import {
  CSSProperties,
  useCallback,
  useEffect,
  useReducer,
  useState
} from "react"

import { IPosition, _calcPosition } from "~lib"
import { getMainSelectionChar, getSelectionChar, isDocs } from "~lib/docs"

import BtnIcon from "../icons/notion-icon.png"

interface IContentEnterProps {
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
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState<IPosition>()
  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      const selection = window.getSelection()
      const str = selection?.toString().trim()
      selectionText = str || ""

      if (isDocs()) {
        console.log(isDocs)
        selectionText = getMainSelectionChar() || ""
        console.log(selectionText, "selectionTex33")
      }

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
        props.showPanel?.({
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
