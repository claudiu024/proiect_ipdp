import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalState} from 'react-hooks-global-state'
// import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./components/Cart.js";
import { BrowserRouter as Router } from 'react-router-dom';
const { setGlobalState, useGlobalState } = createGlobalState({});
ReactDOM.render(
  <Router>
   <CartProvider>
    <App >
    </App >
    </CartProvider>
  </Router>,
  document.getElementById('root')
);
export {useGlobalState,setGlobalState}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();