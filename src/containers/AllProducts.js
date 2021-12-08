import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import sweetOrangeMango from "../photos/bodyButter/sweetOrangeMango.JPG"

const AllProducts = () => {
  return(
    <div className="allProductsContainer">
      <ProductCard image={lavender} type={"Body Butter"}/>
      <ProductCard image={sweetOrangeMango} type={"Sweet Orange"} typeOverflow={"Mango"}/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  )
}

export default AllProducts