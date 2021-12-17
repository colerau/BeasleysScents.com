import React, {useState} from "react"
import axios from "axios"

const ProductCard = (props) => {

  const handleClick = () => {
    // send name of product to backend
    axios.post('http://localhost:3000/add-to-cart', {
      category: `${props.category}s`,
      scent: props.scent
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return(
    <div>
      <div className="productCard">
        <img className={props.orientation === "landscape" ? "productCardImageLandscape" : "productCardImage"} src={props.image} alt="Product"></img>
      </div>

      {/* for AllProducts container*/}
      <div style={{textAlign: "center", fontSize: "20px"}} className="quicksand productcategoryText">
        <strong>{props.category}</strong>
      </div>

      {props.scent ?
      <div style={{textAlign: "center"}} className="quicksand productcategoryText">
        Scent: <strong>{props.scent}</strong>
      </div> :
      <></>}

      {props.color ?
      <div style={{textAlign: "center"}} className="quicksand productcategoryText">
        Color: <strong>{props.color}</strong>
      </div> :
      <></>}

      {props.noPurchaseButton === true ? <></> : <button id="productCardButton" onClick={handleClick}>Add to Cart</button>}
    </div>
  )
}

export default ProductCard