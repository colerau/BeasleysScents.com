import React, {useState} from "react"
import { Link } from "react-router-dom";

const Navbar = props => {
  return(
      <div>
        <div className="navbar">
          <span>
            Home
          </span>
          <span>
            <Link to="/all-products" style={{color: "black"}}>All Products</Link>
          </span>
          <span>
            Contact
          </span>
          <span>
            Instagram
          </span>
        </div>
      </div>
  )
}

export default Navbar