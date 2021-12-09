import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"

const AllProducts = () => {
  return(
    <div className="allProductsContainer">
      <ProductCard image={lavender} type={"Body Butter"}/>
    </div>
  )
}

export default AllProducts