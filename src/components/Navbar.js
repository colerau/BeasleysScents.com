import React, {useState} from "react"
import { Link } from "react-router-dom";

const Navbar = props => {
  return(
    <div id="navbarContainer">
      <div className="navbar">
        <Link to="/" style={{color: "black"}}><span>Home</span></Link>
        <span>
          <Link to="/all-products" style={{color: "black"}}>All Products</Link>
        </span>
        {/* <span>
          <Link to="/contact" style={{color: "black"}}>Contact</Link>
        </span> */}
        <span>
          <a href="https://www.instagram.com/beasleyscents/" style={{color: "black"}}target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
      </div>

      {/* <div id="navbarShoppingCart">
          <Link to="/shopping-cart" style={{color: "black"}}>My Cart</Link>
      </div> */}
    </div>
  )
}

export default Navbar