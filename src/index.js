import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./containers/AllProducts.js";
import BodyButterContainer from "./containers/BodyButterContainer.js";
import ShoppingCart from "./components/ShoppingCart.js"
import Checkout from "./components/Checkout.js"
import 'bootstrap/dist/css/bootstrap.min.css';

fetch('http://localhost:3000', {credentials: 'include'})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="all-products" element={<AllProducts />} />
      <Route path="body-butter" element={<BodyButterContainer category="Body Butter"/>} />
      <Route path="shopping-cart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
