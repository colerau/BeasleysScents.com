import React from "react"
import ProductCard from "../components/ProductCard.js"
import grapefruitAndOrange from "../photos/bodyButter/grapefruitAndOrange.JPG"
import sugarScrubsVariety from "../photos/sugarScrubs/sugarScrubsVariety.JPG"
import bathSaltsVariety from "../photos/bathSalts/bathSaltsVariety.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { Link } from "react-router-dom";
import lowAngle from "../photos/bubbleCandles/low-angle.JPG"

// const AllProducts = () => {
//   return(
//     <div>
//       <Jumbotron />
//       <Navbar />
//       <div className="header">
//         All Products
//       </div>
//       <div className="allProductsContainer">
//         {/* <Link to="/body-butter" style={{color: "black"}}><ProductCard noPurchaseButton={true} image={lavender} type={"Body Butter"}/></Link> */}
//       </div>
//       <Footer />
//     </div>
//   )
// }

class AllProducts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {products: []}
  }

  // componentDidMount = () => {
  //   axios
  //   .get('http://localhost:3000/products', {
  //   })
  //   .then((response) => {
  //     this.setState({
  //       products: [...response.data]
  //     })
  //   })
  // }

  render = () => {
    return(
      <div>
        <Jumbotron />
        <Navbar />
        <div className="header">
          Select a Product
        </div>
        <div className="allProductsContainer">
          <Link to="/body-butter" style={{color: "black"}}><ProductCard orientation={"landscape"} noPurchaseButton={true} image={grapefruitAndOrange} category={"Body Butter"}/></Link>
          {/* {this.state.products.map(product => (
            <ProductCard category={product.category} scent={product.scent} color={product.color} />
          ))} */}

        <Link to="/sugar-scrubs" style={{color: "black"}}><ProductCard noPurchaseButton={true} image={sugarScrubsVariety} category={"Sugar Scrubs"} orientation="landscape" /></Link>

        <Link to="/bath-salts" style={{color: "black"}}><ProductCard noPurchaseButton={true} image={bathSaltsVariety} category={"Bath Salts"} /></Link>

        <Link to="/bubble-candles" style={{color: "black"}}><ProductCard noPurchaseButton={true} image={lowAngle} category={"Bubble Candles"} /></Link>

        </div>
        <Footer />
      </div>
    )
  }
}
export default AllProducts