import React from "react"
import mint from "../photos/homePage/mint.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const InfoBoxBottom = () => {
  return(
    <div className="infoBoxBottomContainer">

      <div className="infoBoxBottomTextContainer">
        <div style={{fontSize: "38px"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            All products made with love from our family to yours!
            <div style={{fontSize: "20px", paddingTop: "17px"}}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>

      <div className="infoBoxBottomImageContainer">
        <img src={mint} alt="" className="infoBoxBottomImage"></img>
      </div>
    </div>
  )
}

export default InfoBoxBottom