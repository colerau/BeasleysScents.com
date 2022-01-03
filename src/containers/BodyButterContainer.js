import React from "react"
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

const BodyButterContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose Your Body Butter
      </div>
      <div className="allProductsContainer">
        <ProductCard image={lavender} category={props.category} scent={"Lavender"} isBodyButter={true} />
        <ProductCard image={sweetOrangeMango} category={props.category} scent={"Sweet Orange Mango"} typeOverflow={"Mango"} isBodyButter={true} />
        <ProductCard image={grapefruitAndOrange} category={props.category} scent={"Grapefruit & Orange"} typeOverflow={"& Orange"} orientation={"landscape"} isBodyButter={true} />
        <ProductCard image={coconutAndVanilla} category={props.category} scent={"Coconut & Vanilla"} isBodyButter={true} />
        <ProductCard image={oatmealCookie} category={props.category} scent={"Oatmeal Cookie"} isBodyButter={true} />
        <ProductCard image={roseAndVanilla} category={props.category} scent={"Rose & Vanilla"} orientation="landscape" isBodyButter={true} />
      </div>
      <Footer />
    </div>
  )
}

export default BodyButterContainer