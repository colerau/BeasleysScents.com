import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import roseAndVanilla from "../photos/sugarScrubs/roseAndVanilla.JPG"

const SugarScrubsContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Sugar Scrubs
      </div>
      <div className="allProductsContainer">
        <ProductCard image={roseAndVanilla} category={props.category} scent={"Rose & Vanilla"} orientation="landscape" price="15.00" />
      </div>
      <Footer />
    </div>
  )
}

export default SugarScrubsContainer