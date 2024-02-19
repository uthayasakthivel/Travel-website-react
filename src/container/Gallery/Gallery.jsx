import React from "react"
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Gallery.css"

const Gallery = () => {
  const scrollRef = React.useRef(null)
  const gallery = [images.one, images.two, images.three, images.four]
  // const scroll = (direction) => {
  //   const { current } = scrollRef;

  //   if (direction === 'left') {
  //     current.scrollLeft -= 300;
  //   } else {
  //     current.scrollLeft += 300;
  //   }
  // };

  const scroll = (direction) => {
    const scrolling = scrollRef

    if (direction === "left") {
      scrolling.current.scrollLeft -= 300 // browser does not allow negative values for the scrollLeft property. When attempting to set scrollLeft to a negative value, the browser will automatically set it to 0.
      console.log(scrolling.current.scrollLeft)
    } else {
      scrolling.current.scrollLeft += 300
      console.log(scrolling.current.scrollLeft)
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              {console.log(`gallery_image-${index + 1}`)}
              {/* keys are gallery_image-1,gallery_image-2... */}
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
