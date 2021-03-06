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
import BubbleCandlesContainer from "./containers/BubbleCandlesContainer.js"
import BathBombsContainer from "./containers/BathBombsContainer.js"
import FaceTonerContainer from "./containers/FaceTonerContainer.js"
import FaceSerumContainer from "./containers/FaceSerumContainer.js"
import WhippedSaltScrubsContainer from "./containers/WhippedSaltScrubsContainer.js"
import MoreProducts from "./containers/MoreProducts.js"
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

      <Route path="bubble-candles" element={<BubbleCandlesContainer category="Bubble Candle"/>} />

      <Route path="bath-bombs" element={<BathBombsContainer category="Bath Bomb"/>} />

      <Route path="face-toner" element={<FaceTonerContainer category="Face Toner"/>} />

      <Route path="face-serum" element={<FaceSerumContainer category="Face Serum"/>} />

      <Route path="whipped-salt-scrubs" element={<WhippedSaltScrubsContainer category="Whipped Salt Scrub"/>} />

      <Route path="more-products" element={<MoreProducts category="More Products"/>} />

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
