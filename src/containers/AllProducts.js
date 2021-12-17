import React, {useState} from "react"
import ProductCard from "../components/ProductCard.js"
import lavender from "../photos/bodyButter/lavender.JPG"
import Jumbotron from "../components/Jumbotron.js"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { Link } from "react-router-dom";
import axios from 'axios'

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
          All Products
        </div>
        <div className="allProductsContainer">
          <Link to="/body-butter" style={{color: "black"}}><ProductCard noPurchaseButton={true} image={lavender} category={"Body Butter"}/></Link>
          {/* {this.state.products.map(product => (
            <ProductCard category={product.category} scent={product.scent} color={product.color} />
          ))} */}

        </div>
        <Footer />
      </div>
    )
  }
}
export default AllProducts