import React from "react"
import fallCollectionImage from "../photos/homePage/fall-collection.jpg"
import mint from "../photos/homePage/mint.JPG"

const InfoBoxBottom = () => {
  return(
    <div className="infoBoxBottomContainer">

      <div className="infoBoxBottomTextContainer">
        <div style={{fontSize: "38px"}}>
          All products made with love from our family to yours!
        </div>
      </div>

      <div className="infoBoxBottomImageContainer">
        <img src={mint} alt="" className="infoBoxBottomImage"></img>
      </div>
    </div>
  )
}

export default InfoBoxBottom