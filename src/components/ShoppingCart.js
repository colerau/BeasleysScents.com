import React from "react"
import axios from "axios"

class ShoppingCart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {products: []}
  }

  componentDidMount = () => {
    // axios
    // .get('http://localhost:3000/show-cart', {
    // })
    // .then((response) => {
    //   this.setState({
    //     products: [...response.data.cart]
    //   })
    // })

    fetch('http://localhost:3000/show-cart', {credentials: 'include'})
    .then(response => response.json())
    .then(json => 
      {
      this.setState({
      products: [...json]})
      }
    )
  }

  handleRemoveProduct = () => {
    console.log("removing product")
  }

  render = () => {
    return(
      <div>
        {this.state.products.length > 0 ? 
        <div>
          {this.state.products.map((product, key) =>
            // putting the key on this div may cause bugs down the line
            <div id="cartContainer" key={key}>
              <div>
                {`${product.category} - ${product.scent}`}
              </div>

              <div>
                <button onClick={this.handleRemoveProduct}>X</button>
              </div>
            </div>
          )}
        </div>
        :
        <div>
          Your cart is empty. 
        </div>
        }
      </div>
    )
  }
}

export default ShoppingCart