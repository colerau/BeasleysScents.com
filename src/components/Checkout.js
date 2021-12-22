import React, {useState} from "react"
import { getCSRFToken } from "../actions/getCSRFToken.js"

const Checkout = () => {


  const [addressLine1, setAddressLine1] = useState("")
  const [addressLine2, setAddressLine2] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")

  const handleSubmit = () => {
    let data = {
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      state: state,
      city: city,
      postalCode: postalCode
    }

    debugger

    const configObject = {
      method: "POST",
      credentials: 'include',
      headers: {
          'X-CSRF-Token': getCSRFToken(),
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/checkout', configObject)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Address Line 1
          <input value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
        </label>

        <label>
          Address Line 2
          <input value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
        </label>

        <label>
          City
          <input value={city} onChange={(e) => setCity(e.target.value)} />
        </label>

        <label>
          State
          <input value={state} onChange={(e) => setState(e.target.value)} />
        </label>

        <label>
          Postal Code
          <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </label>

        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  )
}

export default Checkout