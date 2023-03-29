import cn from "classnames"

// import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import { GetSpaces } from "~lib/api/notion"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"

import "~/styles/main.css"

import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

import { initLang, useLang } from "~lib/hooks/useLang"
import type { INotionSpace } from "~lib/types/notion"

initLang()

enum NotionStatus {
  UnLoad = "UnLoad",
  NotLogin = "NotLogin",
  NotSelectSpace = "NotSelectSpace",
  Success = "Success"
}

function IndexPopup() {
  const [notionSpace, setNotionSpace, { remove }] = useStorage<
    INotionSpace | undefined
  >({
    key: ConstEnum.USED_NOTION_SPACE,
    instance: storage
  })

  const { t, lang, setLang, removeLang } = useLang()

  const [isNotionLogin] = useStorage({
    key: ConstEnum.NOTION_IS_LOGIN,
    instance: storage
  })

  const [darkMode, setDarkMode, { remove: removeDarkMode }] = useStorage({
    key: ConstEnum.DARK_MODE,
    instance: storage
  })

  const [
    closeSelectionIcon,
    setCloseSelectionIcon,
    { remove: removeCloseSelectionIcon }
  ] = useStorage({
    key: ConstEnum.CLOSE_SELECTION_ICON,
    instance: storage
  })

  const [status, setStatus] = useState<NotionStatus>(NotionStatus.UnLoad)

  const [spaces, setSpaces] = useState<INotionSpace[]>([])

  const [showSettings, setShowSettings] = useState(false)

  const [showSpaces, setShowSpaces] = useState(false)

  useEffect(() => {
    if (!showSpaces) {
      setShowSettings(false)
    }
  }, [showSpaces])

  useEffect(() => {
    if (notionSpace) {
      // SUCCESS
      setStatus(NotionStatus.Success)
    }
    setStatus(NotionStatus.NotSelectSpace)
  }, [notionSpace])

  useEffect(() => {
    if (showSpaces) {
      GetSpaces().then((spaces) => {
        setSpaces(spaces)
      })
    }
  }, [showSpaces])

  const notLoginRender = () => (
    <div className="card-body">
      <h2 className="card-title">{t("NotionNotLogin")}</h2>
      <p>{t("NotionNotLoginDesc")}</p>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            chrome.tabs.create({
              url: "https://www.notion.so/login"
            })
          }}>
          {t("LoginNotion")}
        </button>
      </div>
    </div>
  )

  const selectSpaceRender = () => {
    const mode = notionSpace ? "Change" : "Select"
    return (
      <>
        <div className="drawer drawer-end">
          <input
            id="my-drawer-4"
            type="checkbox"
            className="drawer-toggle"
            checked={showSpaces}
            onChange={() => setShowSpaces(showSpaces)}
          />
          <div className="drawer-content">
            <div className="card-body">
              <div className="flex items-center absolute top-3 right-3 cursor-pointer">
                <div
                  className="tooltip tooltip-primary tooltip-left"
                  data-tip={t("GithubIconMessage")}>
                  <svg
                    className="icon w-4 h-4 mr-2 "
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4379"
                    width="200"
                    height="200"
                    onClick={() => {
                      chrome.tabs.create({
                        url: "https://github.com/microvoid/notion-ai-anywhere"
                      })
                    }}>
                    <path
                      d="M512 12.672c-282.88 0-512 229.248-512 512 0 226.261333 146.688 418.133333 350.08 485.76 25.6 4.821333 34.986667-11.008 34.986667-24.618667 0-12.16-0.426667-44.373333-0.64-87.04-142.421333 30.890667-172.458667-68.693333-172.458667-68.693333C188.672 770.986667 155.008 755.2 155.008 755.2c-46.378667-31.744 3.584-31.104 3.584-31.104 51.413333 3.584 78.421333 52.736 78.421333 52.736 45.653333 78.293333 119.850667 55.68 149.12 42.581333 4.608-33.109333 17.792-55.68 32.426667-68.48-113.706667-12.8-233.216-56.832-233.216-253.013333 0-55.893333 19.84-101.546667 52.693333-137.386667-5.76-12.928-23.04-64.981333 4.48-135.509333 0 0 42.88-13.738667 140.8 52.48 40.96-11.392 84.48-17.024 128-17.28 43.52 0.256 87.04 5.888 128 17.28 97.28-66.218667 140.16-52.48 140.16-52.48 27.52 70.528 10.24 122.581333 5.12 135.509333 32.64 35.84 52.48 81.493333 52.48 137.386667 0 196.693333-119.68 240-233.6 252.586667 17.92 15.36 34.56 46.762667 34.56 94.72 0 68.522667-0.64 123.562667-0.64 140.202666 0 13.44 8.96 29.44 35.2 24.32C877.44 942.592 1024 750.592 1024 524.672c0-282.752-229.248-512-512-512"
                      fill=""
                      p-id="4380"></path>
                  </svg>
                </div>

                <div
                  className="tooltip tooltip-primary tooltip-left"
                  data-tip={t("Setting")}>
                  <Cog8ToothIcon
                    className="w-5"
                    onClick={() => {
                      setShowSettings(true)
                      setShowSpaces(true)
                    }}></Cog8ToothIcon>
                </div>
              </div>
              <h2 className="card-title">{t("SelectChangeSpaceTitle")}</h2>
              <p className="mb-4">{t("SelectChangeSpaceDesc")}</p>
              <div className="indicator">
                <div className="indicator-item indicator-bottom">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowSpaces(true)}>
                    {t(mode)}
                  </button>
                </div>
                <div className="card border">
                  <div className="card-body">
                    {/* <h3 className="card-title">Using space</h3> */}
                    {!notionSpace ? (
                      <h3 className="card-title">{t("NotSelectSpace")}</h3>
                    ) : (
                      <div className="w-full flex items-center">
                        <div className="avatar">
                          {notionSpace.icon ? (
                            <div className="w-8 rounded">
                              <img src={notionSpace.icon} />
                            </div>
                          ) : (
                            <div className="avatar placeholder">
                              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <span>{notionSpace.name[0]}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="ml-4 text-lg">{notionSpace.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              onClick={() => {
                setShowSpaces(false)
              }}
              className="drawer-overlay"></label>

            {showSettings ? (
              <ul className="menu p-4 w-64 bg-base-100 text-base-content">
                {/* setting */}
                <label className="cursor-pointer label">
                  {/* <span className="label-text">Language</span>
                  <input
                    type="radio"
                    name="Chinese"
                    className="radio radio-primary"
                  />
                  <input
                    type="radio"
                    name="English"
                    checked
                    className="radio radio-primary"
                  />
                </label>
                <label className="cursor-pointer label">
                  <span className="label-text">Show Select Icon</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked
                />*/}
                </label>
                <label className="cursor-pointer label">
                  <span className="label-text">{t("DarkMode")}</span>
                  <div
                    className="tooltip tooltip-primary tooltip-left"
                    data-tip={
                      darkMode ? t("ChangeToLightMode") : t("ChangeToDarkMode")
                    }>
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => {
                        if (darkMode) {
                          removeDarkMode()
                        } else {
                          setDarkMode(1)
                        }
                      }}
                      className="toggle toggle-primary"
                    />
                  </div>
                </label>
                <label className="cursor-pointer label">
                  <span className="label-text">{t("CloseSelectionIcon")}</span>
                  <div
                    className="tooltip tooltip-primary tooltip-left"
                    data-tip="cmd+k also call the panel">
                    <input
                      type="checkbox"
                      checked={closeSelectionIcon}
                      onChange={() => {
                        if (closeSelectionIcon) {
                          removeCloseSelectionIcon()
                        } else {
                          setCloseSelectionIcon(1)
                        }
                      }}
                      className="toggle toggle-primary"
                    />
                  </div>
                </label>

                <label className="cursor-pointer label">
                  <span className="label-text">{t("Chinese")}</span>
                  <div
                    className="tooltip tooltip-primary tooltip-left"
                    data-tip={t("Use Chinese")}>
                    <input
                      type="checkbox"
                      checked={lang === "zh"}
                      onChange={() => {
                        if (lang === "zh") {
                          setLang("en")
                        } else {
                          setLang("zh")
                        }
                      }}
                      className="toggle toggle-primary"
                    />
                  </div>
                </label>
              </ul>
            ) : (
              <ul className="menu p-4 w-48 bg-base-100 text-base-content">
                {!isNotionLogin && (
                  <div className="w-full h-full flex items-center">
                    <button
                      className="btn btn-primary w-full"
                      onClick={() => {
                        chrome.tabs.create({
                          url: "https://www.notion.so/login"
                        })
                      }}>
                      {t("LoginNotion")}
                    </button>
                  </div>
                )}
                {spaces.map((space) => {
                  const isSelect = space.id === notionSpace?.id
                  return (
                    <li
                      key={space.id}
                      className={cn("flex-row", {
                        bordered: isSelect
                      })}
                      onClick={() => {
                        setNotionSpace(space)
                        setShowSpaces(false)
                      }}>
                      <a
                        className="w-full"
                        style={{
                          borderRadius: "unset"
                        }}>
                        <div className="avatar">
                          {space.icon ? (
                            <div className="w-8 rounded">
                              <img src={space.icon} />
                            </div>
                          ) : (
                            <div className="avatar placeholder">
                              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <span>{space.name[0]}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        {space.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      style={{
        width: "500px",
        height: "310px"
      }}
      data-theme={darkMode ? "dark" : "light"}>
      <div
        className="card card-side bg-base-100 h-full shadow-xl"
        style={{
          borderRadius: "unset"
        }}>
        <figure className="flex-none">
          <img
            className="h-full object-cover object-center "
            style={{
              width: "200px"
            }}
            src="https://images.unsplash.com/photo-1658383178431-42985646a636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fE5vdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Movie"
          />
        </figure>
        {status === NotionStatus.NotLogin && notLoginRender()}
        {(status === NotionStatus.NotSelectSpace ||
          status === NotionStatus.Success) &&
          selectSpaceRender()}
      </div>
    </div>
  )
}

export default IndexPopup
