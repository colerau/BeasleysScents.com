import React, {useState} from "react"
import axios from "axios"
import {getCSRFToken} from "../actions/getCSRFToken.js"
// import Button, {glyphicon} from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

class ProductCard extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      bodyButterWeight: '4oz',
      bodyButterPrice: '20.00',
      redirectToCheckout: null,
      price: "15.00"
    }
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3000/show-cart', {credentials: 'include'})
  //   .then(response => response.json())
  //   .then(json => {
  //     this.setState({products: [...json]})
  //   })
  // }

  // adding item to cart
  handleClick = () => {
    let data = {
      category: this.props.category,
      scent: this.props.scent 
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
      console.log('Success:', data)
      if (data.errors === "Item already added to cart") {
        alert("Item already added to cart.")
      } else if (data.message === "Item successfully added to cart") {
        alert("Item successfully added to cart!")
      } else if (data.errors === "Product not found. Could not add product to cart") {
        alert("Product not found. Could not add product to cart.")
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  addBodyButterDetailsToDataObject = dataObject => {
    dataObject["bodyButterWeight"] = this.state.bodyButterWeight
    dataObject["bodyButterPrice"] = this.state.bodyButterPrice
    return dataObject
  }

  createDataObject = () => {
    let data = {}

    data["category"] = this.props.category
    data["scent"] = this.props.scent
    this.props.isBodyButter && this.addBodyButterDetailsToDataObject(data)
    if (!this.props.isBodyButter) {
      data["price"] = this.props.price
    }
    

    return data
  }

  handleBuyNow = () => {
    let data = this.createDataObject()

    const configObject = {
      method: "POST",
      credentials: 'include',
      headers: {
          'X-CSRF-Token': getCSRFToken(),
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/purchase', configObject)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      this.setState({redirectToCheckout: "/checkout"})
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Could not checkout item.")
    })
  }

  handleBodyButterRightArrowClick = () => {
    this.setState({
      bodyButterWeight: '8oz',
      bodyButterPrice: '35.00'
    })
  }

  handleBodyButterLeftArrowClick = () => {
    this.setState({
      bodyButterWeight: '4oz',
      bodyButterPrice: '20.00'
    })
  }

  // toggleAddToCartButton = () => {
  //   let currentProduct
  //   let showAddToCartButton = true

  //   if (this.props.color) {
  //     currentProduct = {category: this.props.category, scent: this.props.scent, color: this.props.color}
  //   } else {
  //     currentProduct = {category: this.props.category, scent: this.props.scent}
  //   }

  //   this.state.products.forEach(product => {
  //     if (product === currentProduct) {
  //       showAddToCartButton = false
  //     }
  //   })

  //   return showAddToCartButton
  // }

  render = () => {
    if (this.state.redirectToCheckout) {
      return <Navigate to={this.state.redirectToCheckout} />
    }
    return(
      <div>
        <div className="productCard">
          <img className={this.props.orientation === "landscape" ? "productCardImageLandscape" : "productCardImage"} src={this.props.image} alt="Product"></img>
        </div>
  
        {/* for AllProducts container*/}
        <div style={{textAlign: "center", fontSize: "20px"}} className="quicksand productcategoryText">
          {this.props.category}
        </div>
  
        {this.props.scent ?
        <div style={{textAlign: "center"}} className="quicksand productcategoryText">
          Scent: {this.props.scent}
        </div> :
        <></>}
  
        {this.props.color ?
        <div style={{textAlign: "center"}} className="quicksand productcategoryText">
          Color: {this.props.color}
        </div> :
        <></>}

        {this.props.price ?
        <div style={{textAlign: "center"}} className="quicksand productcategoryText">
          Price: ${this.props.price}
        </div> :
        <></>}

        {this.props.isBodyButter &&
      
          <>
            <div className="weightContainer">
              {this.state.bodyButterWeight === "4oz" &&            
                <div style={{textAlign: "center"}} className="quicksand productcategoryText">
                  <button className="arrowButton" disabled={true} onClick={this.handleBodyButterLeftArrowClick} style={{textAlign: "center"}}>
                    {"<"}
                  </button>

                  <span style={{padding: "0 5px 0 5px" }}>
                    Weight: {this.state.bodyButterWeight}
                  </span>
                  
                  <button className="arrowButton" onClick={this.handleBodyButterRightArrowClick} style={{textAlign: "center"}}>
                    {">"}
                  </button>
                </div> 
              }
              {this.state.bodyButterWeight === "8oz" &&            
                <div style={{textAlign: "center"}} className="quicksand productcategoryText">
                  <button className="arrowButton" onClick={this.handleBodyButterLeftArrowClick} style={{textAlign: "center"}}>
                    {"<"}
                  </button>

                  <span style={{padding: "0 5px 0 5px" }}>
                    Weight: {this.state.bodyButterWeight}
                  </span>
                  
                  <button disabled={true} className="arrowButton" onClick={this.handleBodyButterRightArrowClick} style={{textAlign: "center"}}>
                    {">"}
                  </button>
                </div> 
              }
            </div>
        
            <div>
              {this.state.bodyButterWeight === "4oz" && 
              <div style={{textAlign: "center"}} className="quicksand productcategoryText">
                Price: ${this.state.bodyButterPrice}
              </div>
              } 

              {this.state.bodyButterWeight === "8oz" && 
              <div style={{textAlign: "center"}} className="quicksand productcategoryText">
                Price: ${this.state.bodyButterPrice}
              </div>
              } 
            </div>    
          </>

        }
  
        {this.props.noPurchaseButton === true ? <></> :
        <button className="btn btn-outline-dark quicksand" id="productCardButton" onClick={this.handleBuyNow}>Buy Now</button>}

      </div>
    )
  }
}

export default ProductCard