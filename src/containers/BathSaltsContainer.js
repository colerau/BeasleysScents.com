import React from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import lavender from "../photos/bathSalts/lavender.JPG"
import roseAndLavender from "../photos/bathSalts/roseAndLavender.JPG"
import peppermint from "../photos/bathSalts/peppermint.JPG"


const BathSaltsContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose Your Bath Salts
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>

      <div className="allProductsContainer">
        <ProductCard image={lavender} category={props.category} scent={"Lavender"} price="8.00" />
        <ProductCard image={roseAndLavender} orientation="landscape" category={props.category} scent={"Rose & Lavender"} price="8.00" />
        <ProductCard image={peppermint} category={props.category} scent={"Peppermint"} price="8.00" />
      </div>
      <Footer />
    </div>
  )
}

export default BathSaltsContainer