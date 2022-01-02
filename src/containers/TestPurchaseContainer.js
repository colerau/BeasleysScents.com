import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const TestPurchaseContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Test Purchase
      </div>
      <div className="allProductsContainer">
        
      </div>
      <Footer />
    </div>
  )
}

export default TestPurchaseContainer