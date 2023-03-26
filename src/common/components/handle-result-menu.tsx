import { ArrowUturnLeftIcon, Bars2Icon } from "@heroicons/react/24/outline"
import classNames from "classnames"
import copy from "copy-to-clipboard"
import { useState } from "react"

import { insertMainSelectionChar, replaceMainSelectionChar } from "~lib/docs"
import { HandleResultEnum, HandleResultMap, ISelectionOption } from "~lib/enums"
import { showToast } from "~lib/toast"

import Toast from "./toast"

interface IHandleResultMenu {
  result: string
  handleClose: () => void
  // onOptionClick: (option: ISelectionOption) => void
}

export default function HandleResultMenu(props: IHandleResultMenu) {
  const { result, handleClose } = props
  const [activeOption, setActiveOption] = useState<ISelectionOption | null>(
    null
  )
  const handleClick = (option: ISelectionOption) => {
    if (option.value === HandleResultEnum.Copy) {
      copy(result)
      showToast("Copied!")
    } else if (option.value === HandleResultEnum.InsertBelow) {
      insertMainSelectionChar(result)
      handleClose()
      showToast("Inserted!")
    } else if (option.value === HandleResultEnum.ReplaceSelection) {
      replaceMainSelectionChar(result)
      handleClose()
      showToast("Replaced!")
    }
  }

  return (
    <>
      <div className="dropdown dropdown-hover absolute right-0 top-0 p-3">
        <Bars2Icon className="w-5" tabIndex={0}></Bars2Icon>

        <div
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 right-0 ">
          {HandleResultMap.list.map((option) => {
            const active = activeOption?.value === option.value
            return (
              <div
                key={option.value}
                onMouseEnter={(e) => {
                  e.stopPropagation()
                  setActiveOption(option)
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick(option)
                  // onOptionClick(option)
                }}
                tabIndex={0}
                className={classNames(
                  "flex cursor-default select-none items-center rounded-md p-2",
                  active && "bg-gray-100 text-gray-900"
                )}>
                {option.icon && (
                  <option.icon className="h-4 w-4 flex-none rounded-full text-violet-300" />
                )}
                <span className="ml-3 flex-auto truncate ">{option.label}</span>
                {active && (
                  <ArrowUturnLeftIcon
                    className="ml-3 h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
