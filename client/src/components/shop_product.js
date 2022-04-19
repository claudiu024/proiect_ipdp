import React ,{Component, useState}from 'react';
 import plus from "../images/icons8-plus-48.png";
 import minus from "../images/icons8-minus-48.png";

import remove from "../images/icons8-remove-50.png"
export default function Shop_Product({props, index, handleRemove}) {
 
    const [count, setCount] = useState(1);
    function count_up(){
     setCount(count + 1)
   
    }
    function count_down(){
      if (count!=1)
      {
     setCount(count - 1)
      }
   }

    return (
      
        <div className=" shop-div " >
        <img className="shop-image inline" src = {props.image} alt="Imagine indisponibila." ></img>
                <h2 className="inline"> {props.product_name} </h2><h2 className="inline">price: {props.price} euro </h2>
           <div className='counter'> 
         <button className='icon_button'  onClick={count_down}> 
         <img className=" inline" src ={minus }/>
         </button> 
        <h2 className="inline"> {count} </h2>    
        <button className='icon_button'  onClick={count_up}>  
        <img className="inline" src ={plus }/>
        </button>
        </div>  
        <button className='remove-button icon_button' 
       onClick={() => handleRemove(index)}
        >  
        <img className="inline" src ={remove }></img></button>
         
              </div>
    )
  }

