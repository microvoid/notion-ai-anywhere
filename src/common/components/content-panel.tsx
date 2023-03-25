import { Combobox, Dialog, Transition } from "@headlessui/react"
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid"
import {
  ArrowDownLeftIcon,
  // ArrowUpCircleIcon,
  ArrowUturnLeftIcon,
  ChevronRightIcon,
  DocumentPlusIcon,
  FolderIcon,
  FolderPlusIcon,
  HashtagIcon,
  PencilIcon,
  TagIcon,
  UsersIcon
} from "@heroicons/react/24/outline"
import classNames from "classnames"
import {
  CSSProperties,
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useState
} from "react"

// import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import {
  IPosition,
  _calcPosition,
  preventDefaultAndStopPropagation,
  stopPropagation
} from "~lib"
import { ConstEnum, selectionMenuList } from "~lib/enums"
import { storage } from "~lib/storage"
import type { INotionSpace } from "~lib/types/notion"

import BtnIcon from "../icons/notion-icon.png"

const ICON_COLOR = "#a782c3"
interface IContentPanelProps {
  position: IPosition
  selectionText: string
  onClose: () => void
}

const ContentPanel = (props: IContentPanelProps) => {
  const { position, selectionText, onClose } = props
  const [text, setText] = useState<string>("")
  const [notionSpace] = useStorage<INotionSpace | undefined>({
    key: ConstEnum.USED_NOTION_SPACE,
    instance: storage
  })

  const [query, setQuery] = useState("")

  const [open, setOpen] = useState(true)

  // const onMouseUp = useCallback((e: MouseEvent) => {
  //   if (text) {
  //   } else {
  //     const ele = document.querySelector(".notion-ai-anywhere-panel")
  //     onClose?.()
  //   }
  // }, [])

  // useEffect(() => {
  //   document.addEventListener("mouseup", onMouseUp)
  //   return () => {
  //     document.removeEventListener("mouseup", onMouseUp)
  //   }
  // }, [onMouseUp])

  const send = () => {}

  const panelStyle: CSSProperties = {
    width: "500px"
  }
  if (position && position.panelX) {
    console.log(position)
    panelStyle.left = position.panelX
    panelStyle.top = position.panelY
  }
  if (selectionText) {
    const leftWidth = 192
    panelStyle.width = 500 + leftWidth + "px"
    panelStyle.left = `calc(${position.panelX} - ${leftWidth / 2}px)`
  }

  return (
    <div
      className="flex fixed notion-ai-anywhere-panel"
      onMouseUp={stopPropagation}
      onMouseDown={stopPropagation}
      onKeyDown={stopPropagation}
      onKeyUp={preventDefaultAndStopPropagation}
      // style={panelStyle}
    >
      {/* {selectionText && (
        <div className="card w-48 bg-base-100 shadow-xl glass mr-4">
          <div className="card-body p-2">
            <h2 className="card-title">Selection text</h2>
            <p>{selectionText}</p>
          </div>
        </div>
      )} */}
      {/* input */}
      {/* <div className="relative flex-1">
        <img
          src={BtnIcon}
          alt="icon"
          className="absolute w-6 h-6 top-1/2 left-2 translate-y-[-50%]"
        />
        <input
          type="text"
          placeholder="Ask Notion AI to edit or generate..."
          className="box-border input input-bordered h-8 w-full"
          style={{
            paddingLeft: "40px"
          }}
          // autoFocus
          onChange={(e) => {
            setText(e.currentTarget.value)
          }}
          onKeyUp={async (e) => {
            if (e.key === "Enter") {
              const response = await sendToBackground({
                name: "post-notion",
                body: {
                  context: selectionText
                  // onProgress: () => {}
                  // notionSpaceId: notionSpace.id
                }
              })
              // setText(e.currentTarget.value)
            }
          }}
        />
      </div> */}
      {/* panel */}
      {/* <div></div> */}
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear>
        <Dialog
          as="div"
          open={true}
          className="relative"
          style={{
            zIndex: 999999
          }}
          onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox
                  onChange={(item: any) => {
                    console.log(item, "item ")
                    setQuery(item.value || item.name)
                  }}>
                  {({ activeOption }) => (
                    <>
                      <div className="relative ">
                        <img
                          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                          src={BtnIcon}></img>
                        <Combobox.Input
                          value={query}
                          className="outline-none h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                          placeholder="Ask Notion AI to edit or generate..."
                          onChange={(event) => setQuery(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              send()
                            }
                          }}
                        />
                        <ArrowUpCircleIcon
                          onClick={send}
                          className="cursor-pointer absolute top-3.5 right-4 h-5 w-5 text-gray-400"
                          style={
                            query
                              ? {
                                  color: ICON_COLOR
                                }
                              : {}
                          }
                        />
                      </div>

                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100">
                        <>
                          <div
                            className={classNames(
                              "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 divide-gray-500 divide-opacity-10",
                              {
                                "sm:h-96": activeOption
                              }
                            )}>
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                              Recent Ask
                            </h2>
                            <div className="-mx-2 text-sm text-gray-700">
                              {[
                                {
                                  name: "Add new file...",
                                  icon: DocumentPlusIcon,
                                  shortcut: "N",
                                  url: "#"
                                },
                                {
                                  name: "Add new folder...",
                                  icon: FolderPlusIcon,
                                  shortcut: "F",
                                  url: "#"
                                },
                                {
                                  name: "Add hashtag...",
                                  icon: HashtagIcon,
                                  shortcut: "H",
                                  url: "#"
                                },
                                {
                                  name: "Add label...",
                                  icon: TagIcon,
                                  shortcut: "L",
                                  url: "#"
                                }
                              ].map((item) => (
                                <Combobox.Option
                                  as="div"
                                  key={item.name}
                                  value={item}
                                  className={({ active }) =>
                                    classNames(
                                      "flex cursor-default select-none items-center rounded-md p-2",
                                      active && "bg-gray-100 text-gray-900"
                                    )
                                  }>
                                  {({ active }) => (
                                    <>
                                      <PencilIcon
                                        className={classNames(
                                          "h-4 w-4 flex-none text-gray-900 text-opacity-40",
                                          active && "text-opacity-100"
                                        )}
                                        style={{
                                          color: ICON_COLOR
                                        }}
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3 flex-auto truncate">
                                        {item.name}
                                      </span>
                                      {active && (
                                        <ArrowDownLeftIcon
                                          className="ml-3 h-5 w-5 flex-none text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </div>
                            {selectionMenuList.map((menu) => {
                              return (
                                <>
                                  <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                                    {menu.label}
                                  </h2>
                                  <div className="-mx-2 text-sm text-gray-700">
                                    {menu.list.map((item) => (
                                      <div className="dropdown dropdown-hover relative w-full">
                                        <Combobox.Option
                                          as="div"
                                          key={item.value}
                                          value={item}
                                          tabIndex={0}
                                          className={({ active }) =>
                                            classNames(
                                              "flex cursor-default select-none items-center rounded-md p-2",
                                              active &&
                                                "bg-gray-100 text-gray-900"
                                            )
                                          }>
                                          {({ active }) => (
                                            <>
                                              {item.icon ? (
                                                <item.icon
                                                  className="h-4 w-4 flex-none rounded-full"
                                                  style={{
                                                    color: ICON_COLOR
                                                  }}
                                                />
                                              ) : (
                                                <PencilIcon
                                                  className={classNames(
                                                    "h-4 w-4 flex-none text-gray-900 text-opacity-40",
                                                    active && "text-opacity-100"
                                                  )}
                                                  style={{
                                                    color: ICON_COLOR
                                                  }}
                                                  aria-hidden="true"
                                                />
                                              )}
                                              <span className="ml-3 flex-auto truncate">
                                                {item.label}
                                              </span>
                                              {active &&
                                                !item.options?.length && (
                                                  <ArrowUturnLeftIcon
                                                    className="ml-3 h-5 w-5 flex-none text-gray-400"
                                                    aria-hidden="true"
                                                  />
                                                )}
                                              {item.options?.length && (
                                                <ChevronRightIcon
                                                  className="ml-3 h-5 w-5 flex-none text-gray-400"
                                                  aria-hidden="true"
                                                />
                                              )}
                                            </>
                                          )}
                                        </Combobox.Option>
                                        {item.options?.length && (
                                          <div
                                            tabIndex={0}
                                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 right-0 ">
                                            {item.options?.map((option) => (
                                              <Combobox.Option
                                                as="div"
                                                key={option.value}
                                                value={option}
                                                tabIndex={0}
                                                className={({ active }) =>
                                                  classNames(
                                                    "flex cursor-default select-none items-center rounded-md p-2",
                                                    active &&
                                                      "bg-gray-100 text-gray-900"
                                                  )
                                                }>
                                                {({ active }) => (
                                                  <>
                                                    <span className="ml-3 flex-auto truncate">
                                                      {option.label}
                                                    </span>
                                                    {active && (
                                                      <ArrowUturnLeftIcon
                                                        className="ml-3 h-5 w-5 flex-none text-gray-400"
                                                        aria-hidden="true"
                                                      />
                                                    )}
                                                  </>
                                                )}
                                              </Combobox.Option>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )
                            })}
                          </div>

                          <div className="h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                            <div className="h-1/3 flex-none p-2 text-center overflow-y-scroll">
                              <h2 className=" font-semibold text-gray-900">
                                Selection Text
                              </h2>
                              <p className="text-sm leading-6 text-gray-500">
                                {/* {activeOption.role} */}
                                {selectionText}
                              </p>
                              {/* <img
                                  src={activeOption.imageUrl}
                                  alt=""
                                  className="mx-auto h-16 w-16 rounded-full"
                                />
                                <h2 className="mt-3 font-semibold text-gray-900">
                                  {activeOption.name}
                                </h2>
                                <p className="text-sm leading-6 text-gray-500">
                                  {activeOption.role}
                                </p> */}
                            </div>
                            <div className="flex flex-auto flex-col justify-between p-6">
                              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  Phone
                                </dt>
                                {/* <dd>{activeOption.phone}</dd> */}
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  URL
                                </dt>
                                <dd className="truncate">
                                  {/* <a
                                      href={activeOption.url}
                                      className="text-indigo-600 underline">
                                      {activeOption.url}
                                    </a> */}
                                </dd>
                                <dt className="col-end-1 font-semibold text-gray-900">
                                  Email
                                </dt>
                                <dd className="truncate">
                                  <a
                                    // href={`mailto:${activeOption.email}`}
                                    className="text-indigo-600 underline">
                                    {/* {activeOption.email} */}
                                  </a>
                                </dd>
                              </dl>
                              <button
                                type="button"
                                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Send message
                              </button>
                            </div>
                          </div>
                        </>
                      </Combobox.Options>

                      {/* {query !== "" &&  filteredPeople.length === 0 && (
                        <div className="py-14 px-6 text-center text-sm sm:px-14">
                          <UsersIcon
                            className="mx-auto h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                          <p className="mt-4 font-semibold text-gray-900">
                            No people found
                          </p>
                          <p className="mt-2 text-gray-500">
                            We couldn’t find anything with that term. Please try
                            again.
                          </p>
                        </div>
                      )} */}
                    </>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      )
    </div>
  )
}

export default ContentPanel
