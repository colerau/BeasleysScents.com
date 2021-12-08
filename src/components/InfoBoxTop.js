import React, {useState} from "react"
import fallCollectionImage from "../photos/fall-collection.jpg"

const InfoBoxTop = () => {
  return(
    <div className="infoBoxTopContainer">
      <div className="infoBoxTopImageContainer">
        <img src={fallCollectionImage} alt="" className="infoBoxTopImage"></img>
      </div>

      <div className="infoBoxTopTextContainer">
        <div style={{fontSize: "60px"}}>
          Hand-crafted &amp; poured
        </div>

        <div>
          Made with fair trade ingredients
        </div>
      </div>
    </div>
  )
}

export default InfoBoxTop