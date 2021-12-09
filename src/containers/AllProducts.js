import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const AllProducts = () => {
  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="allProductsHeader">
        All Products
      </div>
      <div className="allProductsContainer">
        <ProductCard image={lavender} type={"Body Butter"}/>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts