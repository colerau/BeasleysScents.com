import React from "react"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const FaceSerumContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose your Face Serum
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>

      <div className="quicksand" style={{fontSize: "34px", textAlign: "center"}}>
        Scents
      </div>

      <div className="quicksand" style={{fontSize: "18px", textAlign: "center", paddingBottom: "29px"}}>
        (Price: $15.00)
      </div>

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Lavender &amp; Rose</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Grapefruit &amp; Sweet Orange</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Grapefruit &amp; Lemon</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Sandalwood, Helichrysum &amp; Lavender</span>
      </div>

      <Footer />
    </div>
  )
}

export default FaceSerumContainer