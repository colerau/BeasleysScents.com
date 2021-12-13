import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import sweetOrangeMango from "../photos/bodyButter/sweetOrangeMango.JPG"
import grapefruitAndOrange from "../photos/bodyButter/grapefruitAndOrange.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const BodyButterContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Body Butter
      </div>
      <div className="allProductsContainer">
        <ProductCard image={lavender} category={props.category} type={"Lavender"}/>
        <ProductCard image={sweetOrangeMango} category={props.category} type={"Sweet Orange"} typeOverflow={"Mango"}/>
        <ProductCard image={grapefruitAndOrange} category={props.category} type={"Grapefruit"} typeOverflow={"& Orange"} orientation={"landscape"}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  )
}

export default BodyButterContainer