import React from 'react'
import Carousel from "../Carasoul/Carousel"
import Category from "../category/Category"
import LayOut from '../Componnents/LayOut/LayOut'
function Landing() {
  return (
     <LayOut>
          <Carousel />
          <Category/>
     </LayOut>
  )
}

export default Landing
