// import React, { Component } from 'react'
import ScrambledEggs from "./images/poze mancare/scrambled-eggs.jpg";
import Espresso from "./images/poze bautura/espresso.jpg";
import { useState } from "react";
import Shop_Product from "./components/shop_product";

// export function add_component(){const [component_list,setComponent]=useState(); 
//     if (component_list.length==0) 
//     {setComponent(component_list.concat(<Shop_Product  product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro" key={component_list.length}/>))}}

//export function add_component(){const [component_list,setComponent]=useState(); 
  //  if (component_list.length==0) setComponent(component_list.concat(<Shop_Product  product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro" key={component_list.length}/>))}
// import {VscAccount} from "react-icons/vsc";
export default function Shop()  {
   
   
    return (
      <div className="container">
      <div className="shop-container">
        <h1 style={{}}>Shopping Cart</h1>
  <Shop_Product  product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro"></Shop_Product>

  <Shop_Product  product_name="Espresso" image={Espresso} price="4 euro"></Shop_Product>  
 {/* {component_list} */}
       </div>
       </div>
    )
  
}

