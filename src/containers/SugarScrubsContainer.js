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
        Body Butter
      </div>
      <div className="allProductsContainer">
        <ProductCard image={roseAndVanilla} category={props.category} scent={"Rose & Vanilla"} orientation="landscape" />
      </div>
      <Footer />
    </div>
  )
}

export default SugarScrubsContainer