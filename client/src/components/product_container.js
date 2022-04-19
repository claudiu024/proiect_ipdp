import{ React,useState }from 'react';
import ScrambledEggs from "../images/poze mancare/scrambled-eggs.jpg";
import Shop_Product from './shop_product';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Product_container(props){
  
    
     useEffect(()=>{
        Aos.init({duration:500});
    },[])
    return (
        <div data-aos={props.data_aos} className="food_menu_container">
        <div className="food_menu_row">
        {props.children}

            </div>
            </div>  
              )

}

