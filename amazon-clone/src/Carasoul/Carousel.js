import React from 'react'
import { Carousel } from "react-responsive-carousel"
import { img } from "./Data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carasoul.module.css"
function CarouselEffect(id) {
  return (
    <div key={id}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumps={false}
      
      
      >
        {
          img.map((imgItemLink) => {
            return <img src={imgItemLink} />
          })
        }

      </Carousel>
      <div className={classes.img_hero}></div>
    </div>
  )
}

export default CarouselEffect
