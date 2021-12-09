import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { Link } from "react-router-dom";

const AllProducts = () => {
  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        All Products
      </div>
      <div className="allProductsContainer">
        <Link to="/body-butter" style={{color: "black"}}><ProductCard image={lavender} type={"Body Butter"}/></Link>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts