import React, {useState} from "react"
import axios from "axios"
import {getCSRFToken} from "../actions/getCSRFToken.js"


const ProductCard = (props) => {

  const handleClick = () => {

    let data = {
      category: `${props.category}s`,
      scent: props.scent 
    }

    const configObject = {
      method: "POST",
      credentials: 'include',
      headers: {
          'X-CSRF-Token': getCSRFToken(),
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/add-to-cart', configObject)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
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