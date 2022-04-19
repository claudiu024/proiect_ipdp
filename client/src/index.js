import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalState} from 'react-hooks-global-state'

import { CartProvider } from "./components/Cart.js";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(

     <React.StrictMode>
   <CartProvider>
    <App >
    </App >
    </CartProvider>
    </React.StrictMode>,

  document.getElementById('root')
);
