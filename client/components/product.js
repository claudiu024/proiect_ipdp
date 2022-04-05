import React ,{Component, useState}from 'react';
import {VscDiffAdded} from "react-icons/vsc";
import Tooltip from '@mui/material/Tooltip/Tooltip';
import Shop_Product from './shop_product';
import ScrambledEggs from "../images/poze mancare/scrambled-eggs.jpg";
import { add_component } from '../shop';

export default function Product(props) {
  const [component_list,setComponent]=useState(); 
  function add_component(){
    if (component_list.length==0) setComponent(component_list.concat(<Shop_Product  product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro" key={component_list.length}/>))}
  
    return (

        <div  className="content_menu">
        <div className="example"><img className="food_menu_imagine" src = {props.image} alt="Imagine indisponibila." ></img>
        <div className="fadedbox">
        <div className="title text">{props.product_ingredient}</div>
        </div>
        </div>
        <h1 className='product'>{props.product_name}</h1>
        <h2 className="price">{props.price}</h2>
      
         <Tooltip title="Add to cart" placement="bottom" arrow>
        <button className='icon_button' onClick={add_component} ><VscDiffAdded className="add_to_cart"/></button>
       
          </Tooltip>
          {component_list}
          {/* <span>sds</span> */}
        </div>
    )
  }


