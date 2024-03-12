import React from 'react'
import Carousel from "../Carasoul/Carousel"
import Catagory from "../catagory/Catagory"
import LayOut from '../Componnents/LayOut/LayOut'
function Landing() {
  return (
     <LayOut>
          <Carousel />
          <Catagory/>
     </LayOut>
  )
}

export default Landing
