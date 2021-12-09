import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import sweetOrangeMango from "../photos/bodyButter/sweetOrangeMango.JPG"
import grapefruitAndOrange from "../photos/bodyButter/grapefruitAndOrange.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const AllProducts = () => {
  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Body Butter
      </div>
      <div className="allProductsContainer">
        <ProductCard image={lavender} type={"Lavender"}/>
        <ProductCard image={sweetOrangeMango} type={"Sweet Orange"} typeOverflow={"Mango"}/>
        <ProductCard image={grapefruitAndOrange} type={"Grapefruit"} typeOverflow={"& Orange"} orientation={"landscape"}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts