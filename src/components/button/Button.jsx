import React from 'react'
import "./button.css"
const Button = (props) => {
    const {design, child} = props
  return (
    <>
    <button className={design || "blue"}>{child || "Button"}</button>
    </>
  )
}

export default Button