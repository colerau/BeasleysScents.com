import React, {useState} from "react"
import fallCollectionImage from "../photos/fall-collection.jpg"

const InfoBoxTop = () => {
  return(
    <div className="infoBoxTopContainer">
      <div className="infoBoxTopImageContainer">
        <img src={fallCollectionImage} alt="" className="infoBoxTopImage"></img>
      </div>

      <div>
        right
      </div>
    </div>
  )
}

export default InfoBoxTop