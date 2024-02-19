import React from "react"

import { SubHeading, MenuItem, Button } from "../../components"
import { data, images } from "../../constants"
import "./SpecialMenu.css"

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Unleash wanderlust. Experience serenity." />
      <h1 className="headtext__cormorant">Explore !! </h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_countries  flex__center">
        <p className="app__specialMenu-menu_heading">Countries</p>
        <div className="app__specialMenu_menu_items">
          {data.countries.map((country, index) => (
            <MenuItem
              key={country.title + index}
              title={country.title}
              price={country.price}
              tags={country.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Travel_menu} alt="menu__img" />
        <div
          className="flex__center"
          style={{ justifyContent: "flex-start", maxWidth: "50%" }}
        >
          <img src={images.Travel_menu_2} alt="" />
          <img src={images.Travel_menu_3} alt="" />
        </div>
      </div>

      <div className="app__specialMenu-menu_places  flex__center">
        <p className="app__specialMenu-menu_heading">Places</p>
        <div className="app__specialMenu_menu_items">
          {data.places.map((place, index) => (
            <MenuItem
              key={place.title + index}
              title={place.title}
              price={place.price}
              tags={place.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <Button btnText="view More" />
    </div>
  </div>
)

export default SpecialMenu
