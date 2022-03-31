import React ,{Component, useState}from 'react';
import {VscDiffAdded} from "react-icons/vsc";
import Tooltip from '@mui/material/Tooltip/Tooltip';
export default function product(props) {

    return (
      
        <div  className="content_menu">
          
        <img className="food_menu_imagine" src = {props.image} alt="Imagine indisponibila." ></img>
        <h1 className='product'>{props.product_name}</h1>
        <h3 className='fixed'>Ingredients</h3>
        {/* <h3>yogurt</h3> */}
        <h2>{props.price}</h2>
     
      
         <Tooltip title="Add to cart" placement="bottom" arrow>
        <button className='icon_button'><VscDiffAdded className="add_to_cart"/></button>
          </Tooltip>
          {/* <span>sds</span> */}
        </div>
    )
  }


