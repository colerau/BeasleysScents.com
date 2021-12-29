import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import sweetOrangeMango from "../photos/bodyButter/sweetOrangeMango.JPG"
import grapefruitAndOrange from "../photos/bodyButter/grapefruitAndOrange.JPG"
import coconutAndVanilla from "../photos/bodyButter/coconutAndVanilla.JPG"
import oatmealCookie from "../photos/bodyButter/oatmealCookie.JPG"
import roseAndVanilla from "../photos/bodyButter/roseAndVanilla.JPG"

const BodyButter4ozContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Body Butter
      </div>
      <div className="allProductsContainer">
        <ProductCard image={lavender} category={props.category} scent={"Lavender"} weight="4oz" />
        <ProductCard image={sweetOrangeMango} category={props.category} scent={"Sweet Orange Mango"} typeOverflow={"Mango"} weight="4oz" />
        <ProductCard image={grapefruitAndOrange} category={props.category} scent={"Grapefruit & Orange"} typeOverflow={"& Orange"} orientation={"landscape"} weight="4oz"  />
        <ProductCard image={coconutAndVanilla} category={props.category} scent={"Coconut & Vanilla"} weight="4oz"  />
        <ProductCard image={oatmealCookie} category={props.category} scent={"Oatmeal Cookie"} weight="4oz" />
        <ProductCard image={roseAndVanilla} category={props.category} 
          scent={"Rose & Vanilla"} orientation="landscape" weight="4oz" 
        />
      </div>
      <Footer />
    </div>
  )
}

export default BodyButter4ozContainer