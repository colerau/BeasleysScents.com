import React, {useState} from "react"

const ProductCard = (props) => {
  return(
    <div>
      <div class="productCard">
        <img className="productCardImage" src={props.image} alt="Body Butter"></img>
  
      </div>
      <div style={{textAlign: "center"}} className="quicksand productTypeText">
        {props.type}
      </div>
    </div>
  )
}

export default ProductCard