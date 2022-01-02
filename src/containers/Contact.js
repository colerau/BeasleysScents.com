import React from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import Jumbotron from "../components/Jumbotron.js"

const Contact = props => {
  return(
    <>
      <Jumbotron />
      <Navbar />
      <div className="header">
        Contact
      </div>
      <Footer />
    </>
  )
}

export default Contact