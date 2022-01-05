import React from "react"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

const BathBombsContainer = props => {

  return(
    <div>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Choose your Bath Bomb
      </div>

      <div className="quicksand" style={{textAlign: "center", fontSize: "19px", paddingBottom: "30px"}}>
        Email Misty Beasley at mistybeasley@beasleyscents.com to order. 
      </div>

      <div className="quicksand" style={{fontSize: "34px", textAlign: "center", paddingBottom: "20px"}}>
        Scents
      </div>

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#d199ff", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Grape</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#ff6652", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Grapefruit</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#e9baff", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Lavender &amp; Lemon</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#ad3434", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Rose</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#ffda85", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Oats &amp; Honey</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#90e681", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Apple Mint</span>
      </div>      
      
      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#ed773b", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Sherbet Ice Cream</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#5257de", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Blueberry</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#de5269", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Raspberry Ice</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#fcdef3", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Cotton Candy</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#f5ff96", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Sweet Orange &amp; Pineapple</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#fcdef3", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Cotton Candy &amp; Bubble Gum</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#ff9f96", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Strawberry Ice</span>
      </div>

      <br />

      <div className="quicksand" style={{fontSize: "20px", textAlign: "center"}}>
        <span style={{backgroundColor: "#fcdef3", padding: "5px 5px 5px 5px", borderRadius: "3px"}}>Bubble Gum</span>
      </div>

      <Footer />
    </div>
  )
}

export default BathBombsContainer