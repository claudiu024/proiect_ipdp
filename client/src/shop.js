// import React, { Component } from 'react'
import ScrambledEggs from "./images/poze mancare/scrambled-eggs.jpg";
import Espresso from "./images/poze bautura/espresso.jpg";
import { useState } from "react";
import Shop_Product from "./components/shop_product";

// import {VscAccount} from "react-icons/vsc";
export default function Shop()  {
 
    return (
      <div className="shop-container">
  <Shop_Product  product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro"></Shop_Product>

  <Shop_Product  product_name="Espresso" image={Espresso} price="4 euro"></Shop_Product>  
       </div>
    )
  
}

