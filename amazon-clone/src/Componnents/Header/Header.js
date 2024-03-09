import React from 'react' 
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6"
import classes from "./Header.module.css"
function Header() {
    return (
        <>
            <section>
                <div className={classes.header_container}>
                    {/* logo */}
                    <div className={classes.logo_container}>
                    <a href=''>
                        <img src='https://pngimg.com/uploads/amazon/small/amazon_PNG11.png' alt='amazon log'/>
                        </a>
                    </div>
                    <div className={classes.delivery}>
                     {/* delivery */}
                    <span>
                        <FaLocationDot />
                        </span>
                        <div>
     <p>Deliver To</p>
     <span>Ethiopia</span>
 </div>
                        </div>
                
                <div className={classes.search}>
                    {/* search */}
                    <select name='' id=''>
                        <option value=''>All</option>
                    </select>
                    <input type='text' name='' id='' placeholder='Product search'/>
                    <FaSearch size={25} />
                </div>
                 {/* right side */}
                <div>
                   
                    <div className={classes.order_container}>
                        <a href='' className={classes.language}>
                        <img src='https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' alt='' />
                        <select name='' id=''>
                            <option value=''>En</option>
                            </select>
                            </a>
                    
                   
                    {/* three components */}
                    <a href=''>
                        <div>
                            <p>Sign in</p>
                            <span>Account & list</span>
                        </div>
                    </a>
                    {/* orders  */}
                    <a href=''>
                <p>returns</p>
                 <span>Orders</span>
                    </a>
                     {/* cart  */}
                    <a href='' className={classes.cart}>
                        <CiShoppingCart size={35} />
                  <span>0</span>
                            </a>
                            </div>
                    </div>
                    </div>
            </section>
      </>
  )
}

export default Header
