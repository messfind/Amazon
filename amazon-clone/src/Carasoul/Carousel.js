import React from 'react'
import { Carousel } from "react-responsive-carousel"
import { img } from "./Data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumps={true}
      
      
      >
        {
          img.map((imgItemLink) => {
            return <img src={imgItemLink} />
          })
        }

      </Carousel>
    </div>
  )
}

export default CarouselEffect
