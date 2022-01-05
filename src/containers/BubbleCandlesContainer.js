import React from "react"
import ProductCard from "../components/ProductCard.js"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import highAngle from "../photos/bubbleCandles/high-angle.JPG"


const BubbleCandlesContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose a Bubble Candle
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>

      <div className="allProductsContainer">
        <ProductCard image={highAngle} category={props.category} scent={"Sweet Orange"} color={"Tint of Orange"} backgroundColor={"#ffd6a3"} isBubbleCandle={true} />
      </div>
      <Footer />
    </div>
  )
}

export default BubbleCandlesContainer