import React from "react"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import InfoBoxTop from "../components/InfoBoxTop.js"
import InfoBoxBottom from "../components/InfoBoxBottom.js"
import Footer from "../components/Footer.js"

const Home = () => {
  return(
    <div>
      <Jumbotron />
      <Navbar />
      <InfoBoxTop />
      <InfoBoxBottom />

      <br /> <br />

      <div id="infoSectionHomePage">
        <div id="quoteSectionHomePage">
          <div id="textSectionHomePage" className="quicksand">

            <div style={{fontSize: "24px"}}>
              My Inspiration
            </div>

            <br />

            <div style={{fontSize: "20px"}}>
              I started this journey because of my family skin history ranging from eczema, psoriasis, and acne. I have always struggled when it came time to purchase the right products for my family and never really had any luck. So, I decided to create all-natural bath and body products to share with my family and others in my community. 
            </div>
      
            <br />
            <span style={{fontSize: "18px"}}>
              <strong>~</strong> Misty Beasley
            </span>

          </div>
        </div>
      </div>

      <br />

      <Footer />
    </div>
  )
}

export default Home