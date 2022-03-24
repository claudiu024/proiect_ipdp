import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import FruitsJuice from "./poze bautura/fruits-juice.jpg";
import StillWater from "./poze bautura/still-water.jpg";
import MineralWater from "./poze bautura/mineral-water.jpg";
import Tea from "./poze bautura/tea.jpg";
import Espresso from "./poze bautura/espresso.jpg";
import Cappuccino from "./poze bautura/cappuccino.jpg";
import IcedCoffee from "./poze bautura/iced-coffee.jpg";
import IrishCoffee from "./poze bautura/irish-coffee.jpg";
import Negroni from "./poze bautura/negroni.jpg";
import GinMartini from "./poze bautura/gin-martini.jpg";
import BrambleGin from "./poze bautura/bramble-gin.jpg";
import VasperMartini from "./poze bautura/vasper-martini.jpg";
import MaiTai from "./poze bautura/mai-tai.jpg";
import ZombieCocktail from "./poze bautura/zombie-cocktail.jpg";
import PinaColada from "./poze bautura/pina-colada.jpg";
import RumNegroni from "./poze bautura/rum-negroni.jpg";
import PalomaCocktail from "./poze bautura/paloma-cocktail.jpg";
import Margarita from "./poze bautura/frozen-margarita.jpg";
import PinkMargarita from "./poze bautura/pink-margarita.jpg";
import Lagerita from "./poze bautura/lagerita.jpg";
import {VscDiffAdded} from "react-icons/vsc";


export default function Drink(){
    return(
    <div><Menu/>
        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {FruitsJuice} alt="Imagine indisponibila." ></img>
            <h1>FRUIT JUICE</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {StillWater} alt="Imagine indisponibila." ></img>
            <h1>STILL WATER</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {MineralWater} alt="Imagine indisponibila." ></img>
            <h1>MINERAL WATER</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Tea} alt="Imagine indisponibila." ></img>
            <h1>TEA</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,butter,ham,tomato,salad</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div>
            </div >

        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Espresso} alt="Imagine indisponibila." ></img>
            <h1>ESPRESSO</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Cappuccino} alt="Imagine indisponibila." ></img>
            <h1>CAPPUCCINO</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {IcedCoffee} alt="Imagine indisponibila." ></img>
            <h1>ICED COFFEE</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {IrishCoffee} alt="Imagine indisponibila." ></img>
            <h1>IRISH COFFEE</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,butter,ham,tomato,salad</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div>
            </div >

        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Negroni} alt="Imagine indisponibila." ></img>
            <h1>NEGRONI</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {GinMartini} alt="Imagine indisponibila." ></img>
            <h1>GIN MARTINI</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {BrambleGin} alt="Imagine indisponibila." ></img>
            <h1>BRAMBLE GIN</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {VasperMartini} alt="Imagine indisponibila." ></img>
            <h1>VASPER MARTINI</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,butter,ham,tomato,salad</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div> {/* </Slide> */}
            </div >
           

            <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {MaiTai} alt="Imagine indisponibila." ></img>
            <h1>MAI TAI</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,cereals</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {ZombieCocktail} alt="Imagine indisponibila." ></img>
            <h1>ZOMBIE COCKTAIL</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,fruits,ice</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {PinaColada} alt="Imagine indisponibila." ></img>
            <h1>PINA COLADA</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,tomato,avocado,basil</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {RumNegroni} alt="Imagine indisponibila." ></img>
            <h1>RUM NEGRONI</h1>
            <h3>Ingredients</h3>
            {/* <h3>almond flour,milk,eggs</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div>
            </div >
             
            <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {PalomaCocktail} alt="Imagine indisponibila." ></img>
            <h1>PALOMA COCKTAIL</h1>
            <h3>Ingredients</h3>
            {/* <h3>yogurt</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Margarita} alt="Imagine indisponibila." ></img>
            <h1>MARGARITA</h1>
            <h3>Ingredients</h3>
            {/* <h3>apple,banana,strawberry,blueberry</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {PinkMargarita} alt="Imagine indisponibila." ></img>
            <h1>PINK MARGARITA</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,vanilla</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Lagerita} alt="Imagine indisponibila." ></img>
            <h1>LAGERITA</h1>
            <h3>Ingredients</h3>
            {/* <h3>cheese,ham,nuts</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div>
            </div >
            </div>
            
    
    )
}