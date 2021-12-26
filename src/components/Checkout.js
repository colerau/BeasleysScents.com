import React, {useState} from "react"
import { getCSRFToken } from "../actions/getCSRFToken.js"

class Checkout extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: ''
    }
  }

  handleSubmit = (event) => {
    console.log(event.target.value)
    // let data = {

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

    // fetch('http://localhost:3000/checkout', configObject)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data)
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Address Line 1
          <input name="addressLine1" value={this.state.addressLine1} onChange={this.handleChange} />
        </label>

        <label>
          Address Line 2
          <input name="addressLine2" value={this.state.addressLine2} onChange={this.handleChange} />
        </label>

        <label>
          City
          <input name="city" value={this.state.city} onChange={this.handleChange} />
        </label>

        <label>
          State
          <input name="state" value={this.state.state} onChange={this.handleChange} />
        </label>

        <label>
          Postal Code
          <input name="postalCode" value={this.state.postalCode} onChange={this.handleChange} />
        </label>

        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    )
  }
}

export default Checkout