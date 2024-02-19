import React from "react"

import { images } from "../../constants"

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem", display: "flex" }}>
    <p className="p__cormorant">{title}</p>
    <img
      src={images.flight}
      alt="flight_image"
      className="flight__img"
      style={{ marginLeft: "10px" }}
    />
  </div>
)

export default SubHeading
