import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import Carbonara from "./poze mancare/carbonara.jpg";
import SalmonPasta from "./poze mancare/salmon-pasta.jpg";
import BeefWellington from "./poze mancare/beef-wellington.jpg";
import BeefSteak from "./poze mancare/beef-steak.jpg";
import GreekSalad from "./poze mancare/greek-salad.jpg";
import Vegetables from "./poze mancare/vegetables.jpg";
import Lasagna from "./poze mancare/lasagna.jpg";
import Porchetta from "./poze mancare/porchetta.jpg";
import Risotto from "./poze mancare/risotto.jpg";
import Duck from "./poze mancare/duck.jpg";
import Chicken from "./poze mancare/chicken.jpg";
import SearedSalmon from "./poze mancare/seared-salmon.jpg";
import {VscDiffAdded} from "react-icons/vsc";


export default function MainDish(){
    return(
    <div><Menu/>
        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Carbonara} alt="Imagine indisponibila." ></img>
            <h1>CARBONARA</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {SalmonPasta} alt="Imagine indisponibila." ></img>
            <h1>SALMON PASTA</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {BeefWellington} alt="Imagine indisponibila." ></img>
            <h1>BEEF WELLINGTON</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {BeefSteak} alt="Imagine indisponibila." ></img>
            <h1>BEEF STEAK</h1>
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
            <img className="food_menu_imagine" src = {GreekSalad} alt="Imagine indisponibila." ></img>
            <h1>GREEK SALAD</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,cereals</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Vegetables} alt="Imagine indisponibila." ></img>
            <h1>VEGETABLES</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,fruits,ice</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Lasagna} alt="Imagine indisponibila." ></img>
            <h1>LASAGNA</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,tomato,avocado,basil</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Porchetta} alt="Imagine indisponibila." ></img>
            <h1>PORCHETTA</h1>
            <h3>Ingredients</h3>
            {/* <h3>almond flour,milk,eggs</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
             </div>
            </div >
             
            <div className="food_menu_container ">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Risotto} alt="Imagine indisponibila." ></img>
            <h1>RISOTTO</h1>
            <h3>Ingredients</h3>
            {/* <h3>yogurt</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Duck} alt="Imagine indisponibila." ></img>
            <h1>DUCK</h1>
            <h3>Ingredients</h3>
            {/* <h3>apple,banana,strawberry</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Chicken} alt="Imagine indisponibila." ></img>
            <h1>CHICKEN</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,vanilla</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {SearedSalmon} alt="Imagine indisponibila." ></img>
            <h1>SEARED SALMON</h1>
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