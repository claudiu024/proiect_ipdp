import React ,{Component, useEffect, useState}from 'react';
 import plus from "../images/icons8-plus-48.png";
 import minus from "../images/icons8-minus-48.png";

import remove from "../images/icons8-remove-50.png"
import axios from 'axios';
export default function Shop_Product({props, index, handleRemove,totalPrice}) {
 
  
  const [count, setCount] = useState(props.count);
  const [a,setA]=useState();
  useEffect(()=>{ axios.get("https://628b930f667aea3a3e324150.mockapi.io/breakfast/"+props.id)
    .then(res=>{setA(res.data) 


})},[a])
  // const a=)
  // var count=1;
   async function count_up(){
    setCount(count +1);
  
    axios.put('https://628b930f667aea3a3e324150.mockapi.io/breakfast/'+props.id, {...a, count: count +1 })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    
    ;
    // then(res=>console.log(res.data));

    //  console.log(count)
   
    //  console.log(props.count)
    }
    function count_down(){
      if (props.count!=1)
      { props.setCount( props.count -1)
      }
   }
   async function reset_counter(props){
    // const a=await axios.get("https://628b930f667aea3a3e324150.mockapi.io/breakfast/"+props.id)
    axios.put('https://628b930f667aea3a3e324150.mockapi.io/breakfast/'+props.id, {...a, count: 1 })
   }
   async function remove_item(index,props){
      handleRemove(index)
      reset_counter(props)
    }
    if (a){
    return (
      
        <div className=" shop-div " >
          <img className="shop-image inline" src = {props.image} alt="Imagine indisponibila." ></img>
          <h2 className="inline"> {props.product_name} </h2>
          <h2 className="inline">price: {props.price} euro </h2>
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
        onClick={() =>remove_item(index,props)}
        >  
        <img className="inline" src ={remove }></img></button>
         
              </div>
    )}else{
    return <div>sdsd</div>}
  }

