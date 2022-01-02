import React from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import roseAndVanilla from "../photos/sugarScrubs/roseAndVanilla.JPG"
import lemonAndMint from "../photos/sugarScrubs/lemonAndMint.JPG"
import coconutAndVanilla from "../photos/sugarScrubs/coconutAndVanilla.JPG"
import sweetOrangeAndMango from "../photos/sugarScrubs/sweetOrangeAndMango.JPG"
import grapefruitAndOrange from "../photos/sugarScrubs/grapefruitAndOrange.JPG"
import peppermint from "../photos/sugarScrubs/peppermint.JPG"

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
        <ProductCard image={lemonAndMint} category={props.category} scent={"Lemon & Mint"} orientation="landscape" price="15.00" />
        <ProductCard image={coconutAndVanilla} category={props.category} scent={"Coconut & Vanilla"} orientation="landscape" price="15.00" />
        <ProductCard image={sweetOrangeAndMango} category={props.category} scent={"Sweet Orange & Mango"} orientation="landscape" price="15.00" />
        <ProductCard image={grapefruitAndOrange} category={props.category} scent={"Grapefruit & Orange"} orientation="landscape" price="15.00" />
        <ProductCard image={peppermint} category={props.category} scent={"Peppermint"} orientation="landscape" price="15.00" />
      </div>
      <Footer />
    </div>
  )
}

export default SugarScrubsContainer