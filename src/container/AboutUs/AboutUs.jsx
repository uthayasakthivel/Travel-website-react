import React from "react"

import { images } from "../../constants"
import { Button } from "../../components"
import "./AboutUs.css"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img
          src={images.flight}
          alt="about_flight"
          className="flight__img"
          style={{ width: "45px" }}
        />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
        <Button btnText="Know More" />
      </div>

      <div
        className="app__aboutus-content_eiffel flex__center"
        style={{ height: "700px" }}
      >
        <img
          src={images.eiffel_tower}
          alt="about_eiffel"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={images.flight}
          alt="about_flight"
          className="flight__img"
          style={{ width: "45px" }}
        />
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
        <Button btnText="Know More" />
      </div>
    </div>
  </div>
)

export default AboutUs
