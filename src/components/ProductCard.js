import React, {useState} from "react"

const ProductCard = (props) => {
  return(
    <div>
      <div class="productCard">
        <img className={props.orientation === "landscape" ? "productCardImageLandscape" : "productCardImage"} src={props.image} alt="Product"></img>
      </div>
      <div style={{textAlign: "center"}} className="quicksand productTypeText">
        {props.type}
      </div>
      <div style={{textAlign: "center"}} className="quicksand productTypeText">
        {props.typeOverflow}
      </div>
    </div>
  )
}

export default ProductCard