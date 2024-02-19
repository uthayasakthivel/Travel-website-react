import React from "react"

const Button = ({ btnText }) => {
  return (
    <div>
      <button type="button" className="custom__button">
        {btnText}
      </button>
    </div>
  )
}

export default Button
