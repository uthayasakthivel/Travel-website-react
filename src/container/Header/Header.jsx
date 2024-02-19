import React from "react"

import { Button, SubHeading } from "../../components"
import { images } from "../../constants"
import "./Header.css"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Discover. Explore. Unwind" />
      <h1 className="app__header-h1">Discover Hidden Gems</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to GlobeTrek, where every adventure is a story waiting to be
        written. Immerse yourself in the beauty of diverse cultures,
        breathtaking landscapes.
      </p>
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
      <Button btnText="Explore Menu" />
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
)

export default Header
