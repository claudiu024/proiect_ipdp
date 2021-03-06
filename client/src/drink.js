import { Menu} from "./components/menu" ;

import FruitsJuice from "./images/poze bautura/fruits-juice.jpg";
import StillWater from "./images/poze bautura/still-water.jpg";
import MineralWater from "./images/poze bautura/mineral-water.jpg";
import Tea from "./images/poze bautura/tea.jpg";

import Espresso from "./images/poze bautura/espresso.jpg";
import Cappuccino from "./images/poze bautura/cappuccino.jpg";
import IcedCoffee from "./images/poze bautura/iced-coffee.jpg";
import IrishCoffee from "./images/poze bautura/irish-coffee.jpg";

import Negroni from "./images/poze bautura/negroni.jpg";
import GinMartini from "./images/poze bautura/gin-martini.jpg";
import BrambleGin from "./images/poze bautura/bramble-gin.jpg";
import VasperMartini from "./images/poze bautura/vasper-martini.jpg";

import MaiTai from "./images/poze bautura/mai-tai.jpg";
import ZombieCocktail from "./images/poze bautura/zombie-cocktail.jpg";
import PinaColada from "./images/poze bautura/pina-colada.jpg";
import RumNegroni from "./images/poze bautura/rum-negroni.jpg";

import PalomaCocktail from "./images/poze bautura/paloma-cocktail.jpg";
import Margarita from "./images/poze bautura/frozen-margarita.jpg";
import PinkMargarita from "./images/poze bautura/pink-margarita.jpg";
import Lagerita from "./images/poze bautura/lagerita.jpg";

import Product from './components/product';
import Product_container from './components/product_container';




export default function Drink(){
 
    return(
    <div >

      <Product_container >
            <Product product_name="Fruits Juice" image={FruitsJuice} price={4}></Product>
            <Product product_name="Still Water " image={StillWater} price={4}></Product>
            <Product product_name="Mineral Water" image={MineralWater}  price={4}></Product>
            <Product product_name="Tea" image={Tea} price={4}></Product>
        </Product_container>
       
        <Product_container >
            <Product product_name="Espresso" image={Espresso} price={4}></Product>
            <Product product_name="Cappuccino" image={Cappuccino} price={4}></Product>
            <Product product_name="Iced Coffee" image={IcedCoffee}  price={4}></Product>
            <Product product_name="Irish Coffee" image={IrishCoffee} price={4}></Product>
        </Product_container>
        
       

        <Product_container data_aos="fade-up">
            <Product product_name="Negroni" image={Negroni} price={4}></Product>
            <Product product_name="Gin Martini" image={GinMartini} price={4}></Product>
            <Product product_name="Margarita" image={Margarita}  price={4}></Product>
            <Product product_name="Pink Margarita" image={PinkMargarita} price={4}></Product>
        </Product_container>
                <Product_container data_aos="fade-up">

            <Product product_name="Lagerita" image={Lagerita} price={4}></Product>
            <Product product_name="Bramble Gin" image={BrambleGin} price={4}></Product>
            <Product product_name="Vasper Martini" image={VasperMartini}  price={4}></Product>
            <Product product_name="Mai Tai" image={MaiTai} price={4}></Product>
        </Product_container>

         <Product_container data_aos="fade-up">
            <Product product_name="Zombie Cocktail" image={ZombieCocktail} price={4}></Product>
            <Product product_name="Pina Colada " image={PinaColada} price={4}></Product>
            <Product product_name="Rum Negroni" image={RumNegroni}  price={4}></Product>
            <Product product_name="Paloma Cocktail" image={PalomaCocktail} price={4}></Product>
        </Product_container>
      
            </div>
            
    
    )
}