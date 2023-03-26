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
import { useState } from "react"

import type { ISelectionOption, ISelectionOptionMap } from "~lib/enums"

interface IAskOptionChildListProps {
  label: string
  list: ISelectionOption[]
  activeOption?: ISelectionOption
  onOptionActive: (option: ISelectionOption) => void
  onOptionClick: (option: ISelectionOption) => void
}

const AskOptionChildList = (props: IAskOptionChildListProps) => {
  const {
    label,
    list = [],
    activeOption,
    onOptionActive,
    onOptionClick
  } = props
  // const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="p-5 pt-0 pb-0">
      <h1 className="mt-3 mb-4 text-xs font-semibold text-gray-500">{label}</h1>
      <div className="-mx-2 text-sm text-gray-700">
        {list.map((item, index) => {
          const active = activeOption?.value === item.value
          return (
            <div
              className="dropdown dropdown-hover relative w-full"
              key={item.value}>
              <div
                // value={item}
                tabIndex={0}
                onMouseEnter={(e) => {
                  e.stopPropagation()
                  onOptionActive(item)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  !item.options?.length && onOptionClick(item)
                }}
                className={classNames(
                  "flex cursor-default select-none items-center rounded-md p-2",
                  active && "bg-gray-100 text-gray-900"
                )}>
                <>
                  {item.icon ? (
                    <item.icon className="h-4 w-4 flex-none rounded-full text-violet-300" />
                  ) : (
                    <PencilIcon
                      className={classNames(
                        "h-4 w-4 flex-none text-violet-300 text-opacity-40",
                        active && "text-opacity-100"
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <span className="ml-3 flex-auto truncate">{item.label}</span>
                  {active && !item.options?.length && (
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
              </div>
              {item.options?.length && (
                <div
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 right-0 ">
                  {item.options?.map((option) => {
                    const active = activeOption?.value === option.value
                    return (
                      <div
                        key={option.value}
                        onMouseEnter={(e) => {
                          e.stopPropagation()
                          onOptionActive(option)
                        }}
                        onClick={(e) => {
                          e.stopPropagation()
                          onOptionClick(item)
                        }}
                        tabIndex={0}
                        className={classNames(
                          "flex cursor-default select-none items-center rounded-md p-2",
                          active && "bg-gray-100 text-gray-900"
                        )}>
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
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface IAskMenuListProps {
  list: ISelectionOptionMap[]
  onOptionClick: (option: ISelectionOption) => void
}

export const AskMenuList = (props: IAskMenuListProps) => {
  const { list = [], onOptionClick } = props
  const [activeOption, setActiveOption] = useState<ISelectionOption>()

  return (
    <>
      {list.map((item) => (
        <AskOptionChildList
          key={item.label}
          {...item}
          activeOption={activeOption}
          onOptionActive={setActiveOption}
          onOptionClick={onOptionClick}
        />
      ))}
    </>
  )
}
