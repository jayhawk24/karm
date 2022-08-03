import React, { FC, HTMLAttributes } from "react"

const Label: FC<HTMLAttributes<HTMLLabelElement>> = (props) => {
  return (
    <label {...props} className="block mb-2 text-sm font-medium text-gray-900">
      {props.children}
    </label>
  )
}

export default Label
