// import { Combobox, Dialog, Transition } from "@headlessui/react"
import { Switch } from "@headlessui/react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { UsersIcon } from "@heroicons/react/24/outline"
import {
  CSSProperties,
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useState
} from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import BtnIcon from "~assets/icon.png"
import {
  IPosition,
  _calcPosition,
  preventDefault,
  preventDefaultAndStopPropagation,
  stopPropagation
} from "~lib"
import { ConstEnum } from "~lib/enums"
import { storage } from "~lib/storage"
import type { INotionSpace } from "~lib/types/notion"

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    url: "https://example.com",
    profileUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
  // More people...
]
const recent = [people[0], people[0], people[0], people[0], people[0]]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

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

  //

  const [query, setQuery] = useState("")

  const [open, setOpen] = useState(true)

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })
  //

  // console.log(notionSpace, "notionSpace")

  const onMouseUp = useCallback((e: MouseEvent) => {
    if (text) {
    } else {
      const ele = document.querySelector(".notion-ai-anywhere-panel")
      console.log(ele)

      onClose?.()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [onMouseUp])

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
      {selectionText && (
        <div className="card w-48 bg-base-100 shadow-xl glass mr-4">
          <div className="card-body p-2">
            <h2 className="card-title">Selection text</h2>
            <p>{selectionText}</p>
            <Switch
              checked={true}
              // onChange={setEnabled}
              className={`${
                true ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}>
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  true ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
      )}
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
      {/* <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear>
        <Dialog
          as="div"
          open={true}
          className="relative z-10"
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
                  onChange={(person) => (window.location = person.profileUrl)}>
                  {({ activeOption }) => (
                    <>
                      <div className="relative">
                        <MagnifyingGlassIcon
                          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <Combobox.Input
                          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                          placeholder="Search..."
                          onChange={(event) => setQuery(event.target.value)}
                        />
                      </div>

                      {(query === "" || filteredPeople.length > 0) && (
                        <Combobox.Options
                          as="div"
                          static
                          hold
                          className="flex divide-x divide-gray-100">
                          <div
                            className={classNames(
                              "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                              activeOption && "sm:h-96"
                            )}>
                            {query === "" && (
                              <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                                Recent searches
                              </h2>
                            )}
                            <div className="-mx-2 text-sm text-gray-700">
                              {(query === "" ? recent : filteredPeople).map(
                                (person) => (
                                  <Combobox.Option
                                    as="div"
                                    key={person.id}
                                    value={person}
                                    className={({ active }) =>
                                      classNames(
                                        "flex cursor-default select-none items-center rounded-md p-2",
                                        active && "bg-gray-100 text-gray-900"
                                      )
                                    }>
                                    {({ active }) => (
                                      <>
                                        <img
                                          src={person.imageUrl}
                                          alt=""
                                          className="h-6 w-6 flex-none rounded-full"
                                        />
                                        <span className="ml-3 flex-auto truncate">
                                          {person.name}
                                        </span>
                                        {active && (
                                          <ChevronRightIcon
                                            className="ml-3 h-5 w-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </>
                                    )}
                                  </Combobox.Option>
                                )
                              )}
                            </div>
                          </div>

                          {activeOption && (
                            <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                              <div className="flex-none p-6 text-center">
                                <img
                                  src={activeOption.imageUrl}
                                  alt=""
                                  className="mx-auto h-16 w-16 rounded-full"
                                />
                                <h2 className="mt-3 font-semibold text-gray-900">
                                  {activeOption.name}
                                </h2>
                                <p className="text-sm leading-6 text-gray-500">
                                  {activeOption.role}
                                </p>
                              </div>
                              <div className="flex flex-auto flex-col justify-between p-6">
                                <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Phone
                                  </dt>
                                  <dd>{activeOption.phone}</dd>
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    URL
                                  </dt>
                                  <dd className="truncate">
                                    <a
                                      href={activeOption.url}
                                      className="text-indigo-600 underline">
                                      {activeOption.url}
                                    </a>
                                  </dd>
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Email
                                  </dt>
                                  <dd className="truncate">
                                    <a
                                      href={`mailto:${activeOption.email}`}
                                      className="text-indigo-600 underline">
                                      {activeOption.email}
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
                          )}
                        </Combobox.Options>
                      )}

                      {query !== "" && filteredPeople.length === 0 && (
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
                      )}
                    </>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      ) */}
    </div>
  )
}

export default ContentPanel
