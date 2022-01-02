import React from "react"
import fallCollectionImage from "../photos/homePage/fall-collection.jpg"
import { Link } from "react-router-dom"

const InfoBoxTop = () => {
  return(
    <div className="infoBoxTopContainer">
      <div className="infoBoxTopImageContainer">
        <img src={fallCollectionImage} alt="" className="infoBoxTopImage"></img>
      </div>

      <div className="infoBoxTopTextContainer">
        <div style={{fontSize: "60px"}}>
          Hand-crafted &amp; poured
          <div style={{fontSize: "20px"}} className="textCenter">
            Made with fair trade ingredients
          </div>
          <div>
          <Link 
            className="btn btn-outline-dark"
            id="homepageAllProductsButton"
            role="button"
            to="/all-products"
            > 
            View All Products
          </Link>
          </div>
        </div>

   
      </div>
    </div>
  )
}

export default InfoBoxTop