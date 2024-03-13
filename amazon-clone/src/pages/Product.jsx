import React from 'react'
// const jewelry = "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";
import { Link } from "react-router-dom"
import classes from "../Componnents/Header/Header.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function Product() {
  return (
    <div>
      <div className={classes.product}>
      <Link to=''>
        <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
      </Link>
      <Link to=''>
  <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="" />
        </Link>
        <Link to=''>
   <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="" />
        </Link>
        <Link to=''>
  <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
     </Link>
      </div>
      {/* <div> */}
      {/* <Link to=''> */}
   {/* <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="" /> */}
        {/* </Link> */}
        {/* <Link to=''> */}
  {/* <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" /> */}
     {/* </Link> */}
      {/* </div> */}
    </div>
  )
}

export default Product
