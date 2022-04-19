import React from "react";
import { useCart, useDispatchCart } from "./components/Cart";
import Shop_Product from "./components/shop_product";


export default function Cart() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, product) => total + product.price*product.count, 0);
  
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
  