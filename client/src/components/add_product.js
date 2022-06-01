import '../App.css';
import TextField from "@mui/material/TextField";
import {useState,Fragment}from "react";
import React, { Component,useContext ,useEffect} from 'react'
import axios from "axios";
import { LoginContext } from '../Helpers/LoginContext';

// import Typography from '@mui/material/Typography';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import {MapContainer,TileLayer} from "react-leaflet";
var breakfast_url="https://628b930f667aea3a3e324150.mockapi.io/breakfast"

export function AddProduct(){
  const {breakfast,setBreakfast,AddProductVisibility,setVisibility}=useContext(LoginContext)

    const [product_name, setName] =useState("");
    const [price, setPrice] =useState("");
    const [ingredients, setIngredients] =useState("");
    const[image_url,setImageURL]=useState("");

   
  // useEffect(()=>{axios.get(breakfast_url)
  //   .then(res=>{setBreakfast(res.data) 
  useEffect(()=>{axios.get(breakfast_url)
    .then(res=>{setBreakfast(res.data) 


})},[AddProductVisibility])
  
  // })},[breakfast_url])
  async function post(){
    const product={
      "product_name":product_name,
      "price":price,
      "product_ingredients":ingredients,
      "image":image_url
    }
   await axios.post(breakfast_url,product)
    .then(()=>{console.log("added");})
    .catch((err)=>{console.log(err)})
  }
  
 async function add(e){
  e.preventDefault();
  await post();
 console.log(AddProductVisibility) ;
 setVisibility(false);
 console.log(AddProductVisibility) ;
  console.assert(image_url.includes("jpg")||image_url.includes("jpeg") ,"Image format not supported")
  
// console.log(product_name)


 }
    return(
      <div className='login-div add-product-div'>
        <form onSubmit={add}>
          <div>
        <input placeholder='product name' onChange={(e)=>{setName(e.target.value)} }/> 
        <input placeholder='price'  onChange={(e)=>{setPrice(e.target.value)} }/> 
        <input placeholder='product ingredients' onChange={(e)=>{setIngredients(e.target.value)} }  /> 
        <input placeholder='image url' onChange={(e)=>{setImageURL(e.target.value)} }  /> 
        </div>
        <button  type="submit"> Add product</button>
        </form >
  </div>
      
    )
}
export default AddProduct;