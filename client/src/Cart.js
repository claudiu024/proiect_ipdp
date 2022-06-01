import React from "react";
import { useCart, useDispatchCart } from "./components/Cart";
import { useState } from "react";
import Shop_Product from "./components/shop_product";
import sum from "./Helpers/sum"

export default function Cart(props) {
  
    const items = useCart();
    // const [count, setCount] = useState(2);
    const dispatch = useDispatchCart();
    
    let  totalPrice = items.reduce((total, product) =>sum(total , product.price)   , 0);
   // product.count
  
  const product={
    name:"product",
    price:8
  }
 
    const handleRemove = (index) => {

      dispatch({ type: "REMOVE", index });
    };
  
    if (items.length === 0) {
      return (
        <main>
          <div className="container">
       <div className="shop-container">
         
          <p>Cart is empty</p>
          </div>
          </div>
        </main>
      );
    }
    return (
 
      <div className="container">
        <div className="shop-container">
     
        {items.map((item, index) => (
     
        <Shop_Product
        handleRemove={handleRemove}
        
         key={index} props={item} index={index} >

        </Shop_Product>
        ))}
          <h2 style={{marginRight:50,textAlign:"right"}}>
          Total price:{}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "EUR"
          })}
        </h2>
        </div>
       </div>
  
    );
  }
  