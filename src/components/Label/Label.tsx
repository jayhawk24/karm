import React, { FC, HTMLAttributes, LabelHTMLAttributes } from "react"

const Label = React.forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {props.children}
    </label>
  )
})

Label.displayName = "Custom label"

export default Label
