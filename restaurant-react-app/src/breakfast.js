import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import ScrambledEggs from "./poze mancare/scrambled-eggs.jpg";
import Pancakes from "./poze mancare/pancakes.jpg";
import Croissant from "./poze mancare/croissant.jpg";
import Sandwich from "./poze mancare/sandwich.jpg";
import Cereals from "./poze mancare/cereals.jpg";
import SmoothieBowl from "./poze mancare/smoothie-bowl.jpg";
import Bruschetta from "./poze mancare/bruschetta.jpg";
import FrenchPlateau from "./poze mancare/french-plateau.jpg";
import Yogurt from "./poze mancare/yogurt.jpg";
import FruitSalad from "./poze mancare/fruit-salad.jpg";
import Oats from "./poze mancare/oats.jpg";
import ChiaPudding from "./poze mancare/chia-pudding.jpg";
import {VscDiffAdded} from "react-icons/vsc";


export default function Breakfast(){
    return(
    <div><Menu/>
        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {ScrambledEggs} alt="Imagine indisponibila." ></img>
            <h1>SCRAMBLED EGGS</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Pancakes} alt="Imagine indisponibila." ></img>
            <h1>PANCAKES</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Croissant} alt="Imagine indisponibila." ></img>
            <h1>CROISSANT</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Sandwich} alt="Imagine indisponibila." ></img>
            <h1>SANDWICH</h1>
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
            <img className="food_menu_imagine" src = {Cereals} alt="Imagine indisponibila." ></img>
            <h1>CEREALS</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,cereals</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {SmoothieBowl} alt="Imagine indisponibila." ></img>
            <h1>SMOOTHIE BOWL</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,fruits,ice</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Bruschetta} alt="Imagine indisponibila." ></img>
            <h1>BRUSCHETTA</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,tomato,avocado,basil</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {FrenchPlateau} alt="Imagine indisponibila." ></img>
            <h1>FRENCH PLATEAU</h1>
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
            <img className="food_menu_imagine" src = {Yogurt} alt="Imagine indisponibila." ></img>
            <h1>YOGURT</h1>
            <h3>Ingredients</h3>
            {/* <h3>yogurt</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {FruitSalad} alt="Imagine indisponibila." ></img>
            <h1>FRUIT SALAD</h1>
            <h3>Ingredients</h3>
            {/* <h3>apple,banana,strawberry</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Oats} alt="Imagine indisponibila." ></img>
            <h1>OATS</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,vanilla</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {ChiaPudding} alt="Imagine indisponibila." ></img>
            <h1>CHIA PUDDING</h1>
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