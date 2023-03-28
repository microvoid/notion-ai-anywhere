import cssText from "data-text:~styles/main.css"
import type { PlasmoCSConfig } from "plasmo"
import { useCallback, useEffect, useRef, useState } from "react"
import Tesseract, { createWorker } from "tesseract.js"

import { sendToBackground } from "@plasmohq/messaging"
import { useMessage } from "@plasmohq/messaging/hook"
import { useStorage } from "@plasmohq/storage/hook"

import { IPosition, getSelectionText, storage } from "~lib"
import { ConstEnum } from "~lib/enums"
import { showToast } from "~lib/toast"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

// 模型初始化
// await ocr.init()

interface CaptureBoxInfo {
  x: number
  y: number
  width: number
  height: number
}

// 处于按下状态
let mousedown = false
const mousedownPosition = {
  x: 0,
  y: 0
}

let canvas: HTMLCanvasElement | null = null

const crop = (
  image: string,
  area: CaptureBoxInfo,
  format: string,
  onProgress: (progress: number) => void
): Promise<{
  text: string
  croppedImg: string
}> => {
  //Dpr = device pixel ratio
  const dpr = window.devicePixelRatio || 1
  return new Promise((resolve, reject) => {
    var top = area.y * dpr
    var left = area.x * dpr
    var width = area.width * dpr
    var height = area.height * dpr
    // var w = dpr !== 1 && preserve ? width : area.width
    // var h = dpr !== 1 && preserve ? height : area.height

    var img = new Image()
    img.onload = async () => {
      console.log(
        area.x,
        area.y,
        img.width,
        img.height,
        "img.width, img.height "
      )

      if (!canvas) {
        canvas = document.createElement("canvas")
        document.body.appendChild(canvas)
      }

      canvas.width = img.width
      canvas.height = img.height
      try {
        if (!canvas) {
          return
        }
        var context = canvas.getContext("2d")
        context!.drawImage(
          img,
          left,
          top,
          width,
          height,
          0,
          0,
          img.width,
          img.height
        )

        // Cropped image
        const cropped = canvas.toDataURL(`image/${format}`, 1.0)

        const worker = await createWorker({
          workerPath: chrome.runtime.getURL("js/worker.min.js"),
          langPath: chrome.runtime.getURL("tesseract-data"),
          corePath: chrome.runtime.getURL("js/tesseract-core.wasm.js"),
          logger: (m) => {
            console.log(m)
            if (m.status === "recognizing text" && m.progress) {
              onProgress(m.progress)
            }
          }
        })

        await worker.load()
        await worker.loadLanguage("chi_sim")
        await worker.initialize("chi_sim")
        const {
          data: { text }
        } = await worker.recognize(cropped)

        await worker.terminate()

        resolve({
          croppedImg: cropped,
          text
        })
      } catch (error) {
        reject(error)
      }
    }
    img.src = image
  })
}

const startCapture = async (
  data: {
    x: number
    y: number
    width: number
    height: number
  },
  onProgress: (progress: number) => void
): Promise<{
  text: string
  croppedImg: string
}> => {
  const t = await sendToBackground({
    name: "start-capture",
    body: data
  })

  const result = await crop(t, data, "png", onProgress)
  return result
}

const PlasmoOverlay = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showCapture, setShowCapture] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  const [boxInfo, setBoxInfo] = useState<CaptureBoxInfo>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  })

  const [img, setImage] = useState<string>("")

  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const clear = () => {
    mousedown = false
    mousedownPosition.x = 0
    mousedownPosition.y = 0
    setShowCapture(false)
    setPosition({
      x: 0,
      y: 0
    })
    setBoxInfo({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    })
    setLoading(false)
  }

  const handleKeyup = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCapture) {
        clear()
      }
      if (e.key === "Enter" && showCapture && !loading) {
        setLoading(true)

        try {
          console.log(boxInfo, "boxInfo ")
          const t = await startCapture(boxInfo, (progress) => {
            setProgress(progress)
          })
          // setImage(t)
          sendToBackground({
            name: "show-panel",
            body: {
              selectionText: t.text
            }
          })
          setImage(t.croppedImg)
        } catch (error) {
          showToast("Recognition failed, please try again later")
        }
        clear()
      }
    },
    [showCapture, boxInfo, loading]
  )

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)
    return () => {
      window.removeEventListener("keyup", handleKeyup)
    }
  }, [handleKeyup])

  useMessage<string, string>(async (req, res) => {
    if (req.name === "start-capture") {
      setShowCapture(true)
    }
  })

  const [darkMode] = useStorage({
    key: ConstEnum.DARK_MODE,
    instance: storage
  })

  const calculatePosition = (clientX: number, clientY: number) => {
    let x: number, y: number
    let width = Math.abs(clientX - mousedownPosition.x)
    let height = Math.abs(clientY - mousedownPosition.y)
    if (clientX >= mousedownPosition.x) {
      x = mousedownPosition.x
    } else {
      x = clientX
    }
    if (clientY >= mousedownPosition.y) {
      y = mousedownPosition.y
    } else {
      y = clientY
    }
    return {
      x,
      y,
      width,
      height
    }
  }

  useEffect(() => {
    console.log(2222)
  }, [])

  return (
    <div
      style={{
        zIndex: 999999
      }}
      data-theme={darkMode ? "dark" : "light"}>
      {img && (
        <div
          style={{
            border: "10px solid #000",
            width: "800px"
          }}>
          <img
            src={img}
            style={{
              width: "100%"
            }}></img>
        </div>
      )}
      {showCapture && (
        <div>
          <div
            className="capture-guide-1"
            style={{
              width: position.x + "px"
            }}></div>
          <div
            className="capture-guide-2"
            style={{
              height: position.y + "px"
            }}></div>
          <div
            className="capture-guide-3"
            onKeyDown={(e) => {
              e.stopPropagation()
              if (e.key === "Escape") {
                setShowCapture(false)
              }
            }}
            onMouseDown={(e) => {
              mousedown = true
              mousedownPosition.x = e.clientX
              mousedownPosition.y = e.clientY
              setBoxInfo({
                x: e.clientX,
                y: e.clientY,
                width: 0,
                height: 0
              })
            }}
            onMouseUp={(e) => {
              mousedown = false
              if (!boxInfo || !mousedown) {
                return
              }
              setBoxInfo(calculatePosition(e.clientX, e.clientY))
            }}
            onMouseMove={(e) => {
              setPosition({
                x: e.clientX,
                y: e.clientY
              })

              if (boxInfo && mousedown) {
                setBoxInfo(calculatePosition(e.clientX, e.clientY))
              }
            }}></div>
          {boxInfo && (
            <div
              className="capture-box "
              style={{
                left: boxInfo.x,
                top: boxInfo.y,
                width: boxInfo.width,
                height: boxInfo.height
              }}
              onKeyUp={(e) => {
                e.stopPropagation()
                if (e.key === "Escape") {
                  setShowCapture(false)
                }
              }}>
              {loading && (
                <div className="loading">
                  <progress
                    className="progress progress-primary w-56"
                    value={progress * 100}
                    max="100"></progress>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <iframe
        src="http://127.0.0.1:5173/"
        ref={iframeRef}
        style={{ display: "none" }}
      />
    </div>
  )
}

console.info("Notion AI anywhere capture loaded")

export default PlasmoOverlay
