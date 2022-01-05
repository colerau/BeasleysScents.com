import React from "react"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const WhippedSaltScrubsContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose a Whipped Salt Scrub
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>

      <div className="quicksand" style={{fontSize: "34px", textAlign: "center"}}>
        Scents
      </div>

      <div className="quicksand" style={{fontSize: "18px", textAlign: "center", paddingBottom: "33px"}}>
        (Price: $15.00)
      </div>

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Eucalyptus</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span>Hibiscus &amp; Orange</span>
      </div>

      <Footer />
    </div>
  )
}

export default WhippedSaltScrubsContainer