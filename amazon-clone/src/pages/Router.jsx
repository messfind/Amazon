import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing"
import SignUp from "./Auth/SignUp"
import Pyment from "./pyment/Pyment"
import Order from "./Orders/Order"
import Cart from "./cart/Cart"
function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<SignUp />} />
                <Route path="/payments" element={<Pyment />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/cart" element={<Cart />} /> 
                
            </Routes>
      </Router>
  )
}

export default Routing
