import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./containers/AllProducts.js";
import BodyButterContainer from "./containers/BodyButterContainer.js";
import BodyButter4ozContainer from "./containers/BodyButter4ozContainer.js"
import SugarScrubsContainer from "./containers/SugarScrubsContainer.js"
import BathSaltsContainer from "./containers/BathSaltsContainer.js"
// import TestPurchaseContainer from "./containers/TestPurchaseContainer.js"
// import Contact from "./containers/Contact.js"
// import ShoppingCart from "./components/ShoppingCart.js"

// ! Add back
// import Checkout from "./components/Checkout.js"

import 'bootstrap/dist/css/bootstrap.min.css';

// ! add back
// fetch('https://beasleyscents.herokuapp.com/', {credentials: 'include'})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="all-products" element={<AllProducts />} />
      <Route path="body-butter" element={<BodyButterContainer category="Body Butter"/>} />
      <Route path="body-butter-4oz" element={<BodyButter4ozContainer category="Body Butter 4oz"/>} />

      <Route path="sugar-scrubs" element={<SugarScrubsContainer category="Sugar Scrub"/>} />

      <Route path="bath-salts" element={<BathSaltsContainer category="Bath Salts"/>} />

      {/* <Route path="test-purchase" element={<TestPurchaseContainer category="Test Purchase"/>} /> */}

      {/* <Route path="contact" element={<Contact />} /> */}





      {/* Uncomment this when adding back shopping cart feature */}
      {/* <Route path="shopping-cart" element={<ShoppingCart />} /> */}

      {/* ADD THIS BACK!!! */}
      {/* <Route path="checkout" element={<Checkout />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
