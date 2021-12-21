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

  handleRemoveProduct = (product) => {

    console.log(product)

    // let data = {
    //   category: `${props.category}s`,
    //   scent: props.scent 
    // }

    // const configObject = {
    //   method: "POST",
    //   credentials: 'include',
    //   headers: {
    //       'X-CSRF-Token': getCSRFToken(),
    //       'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }

    // fetch('http://localhost:3000/add-to-cart', configObject)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }

  render = () => {
    return(
      <>
        {this.state.products.length > 0 ? 
          <div>
            {this.state.products.map((product, key) =>
            // putting the key on this div may cause bugs down the line
              <div key={key} id="cartContainer">
                <div>
                  {product.color ?
                  `${product.category} - ${product.scent}` :
                  `${product.category} - ${product.scent}`}
                </div>

                <div>
                  &nbsp;<button onClick={() => this.handleRemoveProduct(product)}>X</button>
                </div>
              </div>
              )}
          </div>
        :
        <div>
          Your cart is empty. 
        </div>
        }
    </>
    )
  }
}

export default ShoppingCart