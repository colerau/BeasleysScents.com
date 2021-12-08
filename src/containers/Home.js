import React, {useState} from "react"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import InfoBoxTop from "../components/InfoBoxTop.js"
import Footer from "../components/Footer.js"

const Home = () => {
  return(
    <div>
      <Jumbotron />
      <Navbar />
      <InfoBoxTop />
      <Footer />
    </div>
  )
}

export default Home