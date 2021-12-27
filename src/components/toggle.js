import React from "react"
import clsx from "clsx"
import { MoonIcon, SunIcon } from "@primer/octicons-react"

export const Toggle = props => {
  const { checked = true, onChange } = props

  return (
    <div className="w-14 h-6 rounded-full overflow-hidden relative box-content">
      <div
        className={clsx(
          "absolute flex h-6 items-center justify-center top-0 left-[-5px] w-24 bg-gray-700 transition-[left]",
          {
            "left-[-35px]": checked,
          }
        )}
      >
        <span className="align-middle flex items-center justify-center w-8">
          <MoonIcon className="fill-indigo-400" />
        </span>
        <span
          className={clsx(
            "align-middle h-[1.125rem] w-[1.125rem] rounded-full bg-white cursor-pointer hover:shadow-yellow-400 hover:shadow-[0_0_2px_2px]",
            {
              "hover:shadow-indigo-400": checked,
            }
          )}
          onClick={() => {
            onChange?.(!checked)
          }}
        />
        <span className="align-middle flex items-center justify-center w-8">
          <SunIcon className="fill-yellow-400" />
        </span>
      </div>
    </div>
  )
}
