import React from 'react'
import Carousel from "../Carasoul/Carousel"
import Category from "../category/Category"
import Product from './Product'
import LayOut from '../Componnents/LayOut/LayOut'
function Landing() {
  return (
     <LayOut>
          <Carousel />
      <Category />
      <Product/>
     </LayOut>
  )
}

export default Landing
