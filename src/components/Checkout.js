import React, {useState} from "react"
import { getCSRFToken } from "../actions/getCSRFToken.js"
import Button from 'react-bootstrap/Button';

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
        
        <div id="addressContainer" className="quicksand">  
          <div className="quicksand">
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
        

          <br />

          <div className="quicksand">
            City
            <br />
            <input name="city" value={this.state.city} onChange={this.handleChange} />
          </div>
      
          <br />

          <div className="quicksand">
            State
            <br />
            <select id="state" name="state" value={this.state.state} onChange={this.handleChange}>
              <option value="">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
            </select>
          </div>
        
          <br />

          <div className="quicksand">
            Postal Code
            <br />
            <input name="postalCode" value={this.state.postalCode} onChange={this.handleChange} />
          </div>
        
          <br />
    
          
          <input className="btn btn-outline-dark" type="submit" value="Checkout with Square" name="submit" />
        </div>
      </form>
    )
  }
}

export default Checkout