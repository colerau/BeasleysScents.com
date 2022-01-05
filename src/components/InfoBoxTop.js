import React from "react"
import { Link } from "react-router-dom"
import squareBodyButter from "../photos/homePage/square-body-butter.JPG"
import sugarScrubsVarietySquare from "../photos/homePage/sugar-scrubs-variety-square.JPG"
import faceToner from "../photos/homePage/face-toner.JPG"
import squareScrub from "../photos/homePage/square-scrub.JPG"

const InfoBoxTop = () => {
  return(
    <div className="infoBoxTopContainer">
      <div className="infoBoxTopImageContainer">
        <div id="rowOne">
          <img src={squareBodyButter} alt="" className="infoBoxTopImage"></img>
          <img src={sugarScrubsVarietySquare} alt="" className="infoBoxTopImage"></img>
        </div>

        <div id="rowTwo">
          <img src={faceToner} alt="" className="infoBoxTopImage"></img>
          <img src={squareScrub} alt="" className="infoBoxTopImage"></img>
        </div>
      </div>

      <div className="infoBoxTopTextContainer">
        <div style={{fontSize: "60px"}}>
          Hand-crafted &amp; poured
          <div style={{fontSize: "20px"}} className="textCenter">
            Made with fair trade ingredients
          </div>
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
  )
}

export default InfoBoxTop