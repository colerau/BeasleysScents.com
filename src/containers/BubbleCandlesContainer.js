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

        <ProductCard image={highAngle} category={props.category} scent={"Peppermint & Lemon"} color={"Pastel Green"} backgroundColor={"#b8ffc7"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Lavender & Lemon"} color={"Pastel Purple"} backgroundColor={"#dcb8ff"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Lavender"} color={"Pastel Purple"} backgroundColor={"#dcb8ff"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Coconut & Mango"} color={"Tint of Orange"} backgroundColor={"#ffd6a3"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Vanilla Rose"} color={"Pastel Pink"} backgroundColor={"#ffe0fe"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Peppermint Vanilla"} color={"Pastel Green"} backgroundColor={"#b8ffc7"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Warm Vanilla Kiss"} color={"Plain"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Apple Cider"} color={"Plain"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Apple Cinnamon Spice"} color={"Pastel Tan"} isBubbleCandle={true} backgroundColor={"#faf0e6"} />

        <ProductCard image={highAngle} category={props.category} scent={"Vanilla Latte"} color={"Pastel Tan"} isBubbleCandle={true} backgroundColor={"#faf0e6"} />

        <ProductCard image={highAngle} category={props.category} scent={"Brown Sugar Plum"} color={"Plain"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Cinnamon Pumpkin Pie"} color={"Plain"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Pumpkin & Vanilla"} color={"Plain"} isBubbleCandle={true} />

        <ProductCard image={highAngle} category={props.category} scent={"Gingerbread"} color={"Pastel Tan"} isBubbleCandle={true} backgroundColor={"#faf0e6"} />

        <ProductCard image={highAngle} category={props.category} scent={"Pumpkin Spice Latte"} color={"Tint of Orange"} backgroundColor={"#ffd6a3"} isBubbleCandle={true} />
      </div>
      <Footer />
    </div>
  )
}

export default BubbleCandlesContainer