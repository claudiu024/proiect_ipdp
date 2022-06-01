import React from 'react';
import {VscDiffAdded} from "react-icons/vsc";
import Tooltip from '@mui/material/Tooltip/Tooltip';
 import { useDispatchCart,useCart} from "./Cart";
 import sum from "../Helpers/sum"
export default function Product(props) {

  const dispatch = useDispatchCart();
  const state = useCart();
  const addToCart = (item) => {
    console.assert((sum(7,2))==9,"Sum function isn't working corectly");
    console.assert(typeof(sum(0,item.price))=='number',"Sum function doesn't return a number");
    console.assert((item.price)!==null ,"The product doesn't have a price");
    console.assert(typeof(item.price)=='number',"The price is not a number");
    // console.log(state[0])
      // if (state.includes(item)) 
        // item.count+=1
      // else
        dispatch({ type: "ADD", item });
      };


    return (

        <div  className="content_menu">
        <div className="example"><img className="food_menu_imagine" src = {props.image} alt="Imagine indisponibila." ></img>
        <div className="fadedbox">
        <div className="title text">{props.product_ingredients}</div>
        </div>
        </div>
        <h1 className='product'>{props.product_name}</h1>
        <h2 className="price">{props.price} euro</h2>
      
         <Tooltip title="Add to cart" placement="bottom" arrow>
        <button onClick={()=>addToCart(props)} className='icon_button'>
          <VscDiffAdded className="add_to_cart"/></button>
       
          </Tooltip>

    
         
        </div>
        
    )

  }
