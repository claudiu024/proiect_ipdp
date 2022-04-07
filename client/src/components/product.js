import React from 'react';
import {VscDiffAdded} from "react-icons/vsc";
import Tooltip from '@mui/material/Tooltip/Tooltip';
 import { useDispatchCart } from "./Cart";
export default function Product(props) {

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
        dispatch({ type: "ADD", item });
      };


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
        <button onClick={()=>addToCart(props)} className='icon_button'>
          <VscDiffAdded className="add_to_cart"/></button>
       
          </Tooltip>

    
         
        </div>
        
    )

  }
