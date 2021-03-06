import { Menu} from "./components/menu" ;
import ScrambledEggs from "./images/poze mancare/scrambled-eggs.jpg";
import Pancakes from "./images/poze mancare/pancakes.jpg";
import Croissant from "./images/poze mancare/croissant.jpg";
import Sandwich from "./images/poze mancare/sandwich.jpg";
import Cereals from "./images/poze mancare/cereals.jpg";
import SmoothieBowl from "./images/poze mancare/smoothie-bowl.jpg";
import Bruschetta from "./images/poze mancare/bruschetta.jpg";
import FrenchPlateau from "./images/poze mancare/french-plateau.jpg";
import Yogurt from "./images/poze mancare/yogurt.jpg";
import FruitSalad from "./images/poze mancare/fruit-salad.jpg";
import Oats from "./images/poze mancare/oats.jpg";
import ChiaPudding from "./images/poze mancare/chia-pudding.jpg";
import Product from './components/product';
import ProductContainer from './components/product_container';
import {useStateIfMounted} from "use-state-if-mounted"
import { useEffect, useState,useContext } from "react";
import { LoginContext } from "./Helpers/LoginContext";
import axios from "axios"
// var count1=1;
// var count2=2;
export default function Breakfast(){
    // const [count, setCount] = useStateIfMounted(1);
    const {breakfast,setBreakfast,AddProductVisibility}=useContext(LoginContext)
    var breakfast_url="https://628b930f667aea3a3e324150.mockapi.io/breakfast"
//   const[count,setCount]=useState(1);
// var a=axios.get(spoturl).then(console.log(a))
// const [breakfast,setBreakfast]=useState();
// useEffect(()=>{axios.get(breakfast_url)
//     .then(res=>{setBreakfast(res.data) 

useEffect(()=>{axios.get(breakfast_url)
    .then(res=>{setBreakfast(res.data) 
console.log("render")

})},[AddProductVisibility])
// })},[AddProductVisibility])

if(breakfast){
    return(
    <div>{AddProductVisibility? "true" :" false"}
        <ProductContainer>
        {breakfast.map((item, index) => (
     
     <Product
     product_name={item.product_name}
     product_ingredients={item.product_ingredients}
     image={item.image}
     price={item.price}
     count={item.count}
     id={item.id}
     key={index}
     
     // count={count}
     // setCount={setCount}
      >

     </Product>
     ))}
      </ProductContainer>
     
		{/* <ProductContainer>
			<Product product_name={breakfast[0].product_name }product_ingredients="alabalaportocala" image={ScrambledEggs} price={4} count={breakfast[0].count} setCount={setCount}></Product>
            <Product product_name={breakfast[1].product_name } image={Pancakes} price={5} count={breakfast[1].count} setCount={setCount}></Product>
            <Product product_name="Croissant" image={Croissant}  price={4}></Product>
            <Product product_name="Sandwich" image={Sandwich} price={4}></Product>
        </ProductContainer>
   
       
        <ProductContainer>
            <Product product_name="Cereals" image={Cereals} price={4}></Product>
            <Product product_name="Smoothie Bowl" image={SmoothieBowl} price={4}></Product>
            <Product product_name="French Plateau" image={FrenchPlateau}  price={4}></Product>
            <Product product_name="Bruschetta" image={Bruschetta} price={4}></Product>
        </ProductContainer>
        
        <ProductContainer data_aos="fade-up">
            <Product product_name="Yogurt" image={Yogurt} price={4}></Product>
            <Product product_name="Fruit Salad" image={FruitSalad} price={4}></Product>
            <Product product_name="Oats" image={Oats}  price={4}></Product>
            <Product product_name="Chia Pudding" image={ChiaPudding} price={4}></Product>
        </ProductContainer> */}
        
       </div>     
             
    )}else
    return(<p>load</p>)
}