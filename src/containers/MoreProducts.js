import React from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import lotionBar from "../photos/moreProducts/lotionBar.jpg"

const MoreProducts = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />

      <div className="header">
        More Products
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>
      
      <div className="allProductsContainer">
        <ProductCard image={lotionBar} category={"Solid Lotion Bar"} price="10.00" />
      </div>
      <Footer />
    </div>
  )
}

export default MoreProducts