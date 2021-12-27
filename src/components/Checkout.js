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
    event.preventDefault()
    console.log('')
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
        
        <div id="addressLineContainer" className="quicksand">  
          <div id="addressLine" className="quicksand">
            Address Line 1
            <br />
            <input name="addressLine1" value={this.state.addressLine1} onChange={this.handleChange} />
          </div>

          <br />

          <div>
            Address Line 2
            <br />
            <input name="addressLine2" value={this.state.addressLine2} onChange={this.handleChange} />
          </div>
        </div>
    


    

      
        City
        <input name="city" value={this.state.city} onChange={this.handleChange} />
    

      
        State
        <input name="state" value={this.state.state} onChange={this.handleChange} />
      

    
        Postal Code
        <input name="postalCode" value={this.state.postalCode} onChange={this.handleChange} />
      

  
        <input type="submit" value="Submit" />
       
      </form>
    )
  }
}

export default Checkout