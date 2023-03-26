import cn from "classnames"

// import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import { GetSpaces } from "~lib/api/notion"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"

// import "~base.css"
import "~styles.css"

import { useEffect, useState } from "react"

import type { INotionSpace } from "~lib/types/notion"

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

  const [status, setStatus] = useState<NotionStatus>(NotionStatus.UnLoad)

  const [spaces, setSpaces] = useState<INotionSpace[]>([])

  const [showSpaces, setShowSpaces] = useState(false)

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
      <h2 className="card-title">Notion not login</h2>
      <p>
        Notion AI Anywhere should you login notion on your browser before. In
        addition you need have notion ai vip account.
      </p>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            chrome.tabs.create({
              url: "https://www.notion.so/login"
            })
          }}>
          Login Notion
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
          />
          <div className="drawer-content">
            <div className="card-body">
              <h2 className="card-title">Select/Change Space</h2>
              <p className="mb-4">
                Select/Change a space with Notion AI use times or with Notion AI
                Plus.
              </p>
              <div className="indicator">
                <div className="indicator-item indicator-bottom">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowSpaces(true)}>
                    {mode}
                  </button>
                </div>
                <div className="card border">
                  <div className="card-body">
                    {/* <h3 className="card-title">Using space</h3> */}
                    {!notionSpace ? (
                      <h3 className="card-title">Not select space</h3>
                    ) : (
                      <div className="w-full flex items-center">
                        <div className="avatar">
                          {notionSpace.icon ? (
                            <div className="w-8 rounded">
                              <img
                                src={notionSpace.icon}
                                alt="Tailwind-CSS-Avatar-component"
                              />
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
            <ul className="menu p-4 w-48 bg-base-100 text-base-content">
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
                            <img
                              src={space.icon}
                              alt="Tailwind-CSS-Avatar-component"
                            />
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
          </div>
        </div>
      </>
    )
  }

  return (
    <div
      style={{
        width: "500px",
        height: "280px"
      }}>
      <div
        className="card card-side bg-base-100 h-full shadow-xl"
        style={{
          borderRadius: "unset"
        }}>
        <figure className="flex-none">
          <img
            className="h-full object-cover object-center"
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
