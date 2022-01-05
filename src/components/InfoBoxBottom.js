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
            <span>All products made with love from our family to yours! <FontAwesomeIcon icon={faHeart} style={{fontSize: "28px"}}/></span>
          </div>
        </div>
        <br />
        <a href="https://www.instagram.com/beasleyscents/" target="_blank" rel="noopener noreferrer" id="homepageInstagramButton" className="btn btn-outline-dark">
          View our Instagram
        </a>
      </div>

      <div className="infoBoxBottomImageContainer">
        <img src={mint} alt="" className="infoBoxBottomImage"></img>
      </div>
    </div>
  )
}

export default InfoBoxBottom