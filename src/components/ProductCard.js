import React, {useState} from "react"

const ProductCard = (props) => {

  const handleClick = () => {

  }

  return(
    <div>
      <div className="productCard">
        <img className={props.orientation === "landscape" ? "productCardImageLandscape" : "productCardImage"} src={props.image} alt="Product"></img>
      </div>
      <div style={{textAlign: "center"}} className="quicksand productcategoryText">
        <strong>{props.category}</strong>
      </div>
      <div style={{textAlign: "center"}} className="quicksand productcategoryText">
        Scent: <strong>{props.scent}</strong>
      </div>
      {props.color ?
      <div style={{textAlign: "center"}} className="quicksand productcategoryText">
        Color: <strong>{props.color}</strong>
      </div> :
      <></>}

      {props.noPurchaseButton === true ? <></> : <button id="productCardButton" onClick={handleClick}>Purchase via Square</button>}
    </div>
  )
}

export default ProductCard