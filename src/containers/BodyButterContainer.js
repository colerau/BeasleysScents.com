import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import sweetOrangeMango from "../photos/bodyButter/sweetOrangeMango.JPG"
import grapefruitAndOrange from "../photos/bodyButter/grapefruitAndOrange.JPG"

const AllProducts = () => {
  return(
    <div className="allProductsContainer">
      <ProductCard image={lavender} type={"Lavender"}/>
      <ProductCard image={sweetOrangeMango} type={"Sweet Orange"} typeOverflow={"Mango"}/>
      <ProductCard image={grapefruitAndOrange} type={"Grapefruit"} typeOverflow={"& Orange"} orientation={"landscape"}/>
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  )
}

export default AllProducts