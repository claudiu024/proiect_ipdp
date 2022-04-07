import React from "react";
import { useCart, useDispatchCart } from "./components/Cart";
import Shop_Product from "./components/shop_product";


export default function Cart() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);
  
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
      <main>
     
        
        <div className="container">
      <div className="shop-container">
      <p>
          Total price:{" "}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "USD"
          })}
        </p>
        {items.map((item, index) => (
     
        <Shop_Product
        handleRemove={handleRemove}
         key={index} props={item} index={index} >

        </Shop_Product>
        ))}
        </div></div>
      </main>
    );
  }
  