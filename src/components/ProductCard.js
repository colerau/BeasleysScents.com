import React, {useState} from "react"
import { purchase } from "../actions/purchase.js"

const ProductCard = (props) => {

  const handleClick = () => {
    purchase(props.category, props.type)
  }

  return(
    <div>
      <div className="productCard">
        <img className={props.orientation === "landscape" ? "productCardImageLandscape" : "productCardImage"} src={props.image} alt="Product"></img>
      </div>
      <div style={{textAlign: "center"}} className="quicksand productTypeText">
        {props.type}
      </div>
      <div style={{textAlign: "center"}} className="quicksand productTypeText">
        {props.typeOverflow}
      </div>

      {props.noPurchaseButton === true ? <></> : <button id="productCardButton" onClick={handleClick}>Purchase via Square</button>}
    </div>
  )
}

export default ProductCard