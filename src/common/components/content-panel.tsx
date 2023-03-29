import { ArrowUpCircleIcon, Bars3Icon } from "@heroicons/react/20/solid"
import { Bars2Icon, PencilIcon } from "@heroicons/react/24/outline"
import classNames from "classnames"
import { useCallback, useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import {
  _calcPosition,
  preventDefaultAndStopPropagation,
  stopPropagation,
  storage
} from "~lib"
import { ConstEnum, ISelectionOption, selectionMenuList } from "~lib/enums"
import { initLang, useLang } from "~lib/hooks/useLang"
import { sendNotionPostToBackground } from "~lib/notion"
import { showToast } from "~lib/toast"
import type { INotionSpace, IPostNotionProgress } from "~lib/types/notion"

import BtnIcon from "../icons/notion-icon.png"
import { AskMenuList } from "./ask-option-list"
import HandleResultMenu from "./handle-result-menu"

initLang()

interface IContentPanelProps {
  show: boolean
  // position: IPosition
  selectionText: string
  onClose: () => void
}

const ContentPanel = (props: IContentPanelProps) => {
  const { show, selectionText, onClose } = props
  const [notionSpace] = useStorage<INotionSpace | undefined>({
    key: ConstEnum.USED_NOTION_SPACE,
    instance: storage
  })
  const [isNotionLogin] = useStorage({
    key: ConstEnum.NOTION_IS_LOGIN,
    instance: storage
  })

  const [recentAsk, setRecentAsk] = useStorage<ISelectionOption[]>({
    key: ConstEnum.RECENT_ASK,
    instance: storage
  })

  const [darkMode] = useStorage({
    key: ConstEnum.DARK_MODE,
    instance: storage
  })

  const [query, setQuery] = useState("")

  const [result, setResult] = useState("")

  const [promptType, setPromptType] = useState("")

  const [sending, setSending] = useState(false)

  const { t } = useLang()

  const send = async (promptType?: string) => {
    if (sending) {
      showToast(t("MessageProcessing"))
      return
    }
    if (!isNotionLogin) {
      // notion not login

      return
    }
    if (!notionSpace) {
      // not select notion space

      return
    }

    if (query) {
      const recentAskTemp = recentAsk || []
      const index = recentAskTemp.findIndex((item) => item.value === query)
      if (index > -1) {
        recentAskTemp.splice(index, 1)
      }
      recentAskTemp.unshift({ value: query, label: query })
      setRecentAsk(recentAskTemp.slice(0, 5))
    }

    let resultTemp = ""
    setPromptType(promptType || query)
    setResult("")
    setSending(true)
    await sendNotionPostToBackground({
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
    setSending(false)
  }

  const clear = () => {
    setQuery("")
    setResult("")
    setSending(false)
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
      data-theme={darkMode ? "dark" : "light"}
      className="flex fixed notion-ai-anywhere-panel text-sm "
      onMouseUp={stopPropagation}
      onMouseDown={stopPropagation}
      onKeyDown={stopPropagation}
      onKeyUp={(e) => {
        preventDefaultAndStopPropagation(e)
        if (e.key === "Escape") {
          handleClose()
        }
      }}>
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
      <div
        className="modal modal-middle pt-24"
        onClick={() => {
          handleClose()
        }}>
        <div
          className="modal-box p-0"
          style={{
            minWidth: "600px",
            maxWidth: "1000px",
            height: "700px",
            width: "auto"
          }}
          onClick={(e) => {
            e.stopPropagation()
          }}>
          <div className="relative w-full">
            <img
              className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
              src={BtnIcon}></img>
            <input
              value={query}
              type="text"
              className="pl-12 pr-12 input input-bordered w-full rounded-none box-border h-12"
              style={{
                outline: "none",
                minWidth: "700px"
              }}
              placeholder={t("AskInputPlaceholder") as string}
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
                "cursor-pointer absolute top-3.5 right-4 h-5 w-5 ",
                query ? "text-violet-300" : "text-gray-400"
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
                {recentAsk && recentAsk.length > 0 && (
                  <AskMenuList
                    list={[
                      {
                        label: t("RecentAsk"),
                        list: recentAsk.map((item) => ({
                          icon: PencilIcon,
                          ...item
                        }))
                      }
                    ]}
                    onOptionClick={(option) => {
                      // send(option.value)
                    }}
                  />
                )}
                <AskMenuList
                  list={selectionMenuList}
                  onOptionClick={(option) => {
                    send(option.value)
                  }}
                />
              </div>
            )}

            {(selectionText || result) && (
              <div className="relative flex-1 p-5 border-l border-gray-200 border-opacity-20">
                {(result || sending) && (
                  <div className="indicator w-full mb-6">
                    <div className="card border w-full">
                      <div className="card-body w-full p-10">
                        <p>
                          <span
                            className="font-sans text-5xl text-violet-300 absolute left-2 top-3"
                            style={{
                              fontFamily: "arial"
                            }}>
                            “
                          </span>
                          {/* {selectionText} */}
                          {result ? (
                            result
                          ) : (
                            <span className="chat-typing w-full text-center">
                              <span className="chat-typing-dot"></span>
                              <span className="chat-typing-dot"></span>
                              <span className="chat-typing-dot"></span>
                            </span>
                          )}
                          <span
                            className="font-sans text-5xl text-violet-300 absolute bottom-0 right-2"
                            style={{
                              fontFamily: "arial"
                            }}>
                            ”
                          </span>
                        </p>
                      </div>
                    </div>
                    <HandleResultMenu
                      result={result}
                      handleClose={handleClose}></HandleResultMenu>
                    <div className="absolute w-full text-center bottom-1 text-gray-200 text-xs">
                      {t("Result")}
                    </div>
                  </div>
                )}

                <div className="indicator w-full">
                  {/* <span className="indicator-item badge badge-primary">
                    Modify
                  </span> */}
                  <div className="card border w-full">
                    <div className="card-body w-full p-10">
                      <p>
                        <span
                          className="font-sans text-5xl text-violet-300 absolute left-2 top-3"
                          style={{
                            fontFamily: "arial"
                          }}>
                          “
                        </span>
                        {selectionText}
                        <span
                          className="font-sans text-5xl text-violet-300 absolute bottom-0 right-2"
                          style={{
                            fontFamily: "arial"
                          }}>
                          ”
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute w-full text-center bottom-1 text-gray-200 text-xs">
                    {t("SelectionText")}
                  </div>
                </div>
              </div>
            )}
          </div>

          {(!isNotionLogin || !notionSpace) && (
            <div className="absolute z-10 w-full h-full left-0 top-0 bg-black bg-opacity-80 flex items-center justify-center text-3xl text-white p-12 text-center">
              {!isNotionLogin
                ? t("NotionNotLoginDescPanel")
                : !notionSpace
                ? t("NotionNotSelectSpace")
                : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentPanel
