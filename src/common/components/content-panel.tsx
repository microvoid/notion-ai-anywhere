import { ArrowUpCircleIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"

import type { _calcPosition } from "~lib"
import { selectionMenuList } from "~lib/enums"
import { sendNotionPostToBackground } from "~lib/notion"
import type { IPostNotionProgress } from "~lib/types/notion"

import BtnIcon from "../icons/notion-icon.png"
import { AskMenuList } from "./ask-option-list"

interface IContentPanelProps {
  show: boolean
  // position: IPosition
  selectionText: string
  onClose: () => void
}

const ContentPanel = (props: IContentPanelProps) => {
  const { show, selectionText, onClose } = props
  // const [notionSpace] = useStorage<INotionSpace | undefined>({
  //   key: ConstEnum.USED_NOTION_SPACE,
  //   instance: storage
  // })

  const [query, setQuery] = useState("")

  const [result, setResult] = useState("")

  const [promptType, setPromptType] = useState("")

  const [sending, setSending] = useState(false)

  const send = async (promptType?: string) => {
    let resultTemp = ""
    setPromptType(promptType || query)
    setResult("")
    setSending(true)
    sendNotionPostToBackground({
      prompt: query,
      context: selectionText,
      promptType: promptType,
      onProgress: (e: IPostNotionProgress) => {
        resultTemp += e.value.completion
        if (!e.done) {
          setResult(resultTemp)
        } else {
          setSending(false)
        }
      }
    })
  }

  // const panelStyle: CSSProperties = {
  // width: "500px"
  // }
  // if (position && position.panelX) {
  //   console.log(position)
  //   panelStyle.left = position.panelX
  //   panelStyle.top = position.panelY
  // }
  // if (selectionText) {
  //   const leftWidth = 192
  //   panelStyle.width = 500 + leftWidth + "px"
  //   panelStyle.left = `calc(${position.panelX} - ${leftWidth / 2}px)`
  // }

  const clear = () => {
    setQuery("")
    setResult("")
  }

  const handleClose = () => {
    // if (query || result) {

    //   return;
    // }
    clear()
    onClose()
  }

  const handleKeyup = useCallback(
    (e: KeyboardEvent) => {
      if (show && e.key === "Escape") {
        handleClose()
      }
    },
    [show]
  )

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup)
    return () => {
      document.removeEventListener("keyup", handleKeyup)
    }
  }, [handleKeyup])

  return (
    <div
      data-theme={"light"}
      className="flex fixed notion-ai-anywhere-panel"
      // onMouseUp={stopPropagation}
      // onMouseDown={stopPropagation}
      // onKeyDown={stopPropagation}
      // onKeyUp={(e) => {
      //   preventDefaultAndStopPropagation(e)
      //   if (e.key === "Escape") {
      //     handleClose()
      //   }
      // }}
    >
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={show}
        id="my-modal-6"
        className="modal-toggle"
        onMouseUp={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onKeyDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onKeyUp={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (e.key === "Escape") {
            handleClose()
          }
        }}
      />
      <div className="modal items-start pt-56">
        <div
          className="modal-box p-0"
          style={{
            maxWidth: "800px",
            maxHeight: "600px",
            width: "auto"
          }}>
          <div className="relative w-full">
            <img
              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
              src={BtnIcon}></img>
            <input
              value={query}
              type="text"
              className="pl-12 pr-12 input input-bordered w-full rounded-none box-border"
              style={{
                outline: "none",
                minWidth: "500px"
              }}
              placeholder="Ask Notion AI to edit or generate..."
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  send()
                }
              }}
            />
            <ArrowUpCircleIcon
              onClick={() => send()}
              className={classNames(
                "cursor-pointer absolute top-3.5 right-4 h-5 w-5 text-gray-400",
                {
                  "text-violet-300": query
                }
              )}
            />
          </div>

          <div className="flex">
            {!query && (
              <div
                className="overflow-auto flex-1"
                style={{
                  minWidth: "250px"
                }}>
                {/* <AskMenuList
                 label="Recent Ask"
                 menuList={[
                   {
                     icon: FolderIcon,
                     value: "Folder1",
                     label: "Folder"
                   },
                   {
                     icon: FolderIcon,
                     value: "Folder2",
                     label: "Folder"
                   },
                   {
                     icon: FolderIcon,
                     value: "Folder3",
                     label: "Folder"
                   },
                   {
                     icon: FolderIcon,
                     value: "Folder4",
                     label: "Folder"
                   }
                 ]}
               /> */}
                {/* {selectionMenuList.map((menu) => {
                 return 
               })} */}
                <AskMenuList
                  list={selectionMenuList}
                  onOptionClick={(option) => {
                    send(option.value)
                  }}
                />
              </div>
            )}

            {(selectionText || result) && (
              <div className="relative flex-1 p-5 border-l border-gray-200">
                {(result || sending) && (
                  <div className="indicator w-full mb-6">
                    <div className="card border w-full">
                      <div className="card-body w-full">
                        <p>
                          <span className="text-5xl text-violet-300 absolute left-2 top-3">
                            “
                          </span>
                          {/* {selectionText} */}
                          {result ? (
                            result
                          ) : (
                            <span className="chat-typing text-center w-full">
                              <span className="chat-typing-dot"></span>
                              <span className="chat-typing-dot"></span>
                              <span className="chat-typing-dot"></span>
                            </span>
                          )}
                          <span className="text-5xl text-violet-300 absolute bottom-0 right-2">
                            ”
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full text-center bottom-1 text-gray-200 text-xs">
                      Result
                    </div>
                  </div>
                )}

                <div className="indicator w-full">
                  {/* <span className="indicator-item badge badge-primary">
                    Modify
                  </span> */}
                  <div className="card border w-full">
                    <div className="card-body w-full">
                      <p>
                        <span className="text-5xl text-violet-300 absolute left-2 top-3">
                          “
                        </span>
                        {selectionText}
                        <span className="text-5xl text-violet-300 absolute bottom-0 right-2">
                          ”
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute w-full text-center bottom-1 text-gray-200 text-xs">
                    Selection Text
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPanel
