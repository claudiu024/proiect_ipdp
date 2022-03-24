import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import Tiramisu from "./poze mancare/tiramisu.jpg";
import Brownie from "./poze mancare/brownie.jpg";
import Lavacake from "./poze mancare/lavacake.jpg";
import Cheesecake from "./poze mancare/cheesecake.jpg";
import Profiteroles from "./poze mancare/profiteroles.jpg";
import ApplePie from "./poze mancare/apple-pie.jpg";
import LemonSlice from "./poze mancare/lemon-slice.jpg";
import PanaCotta from "./poze mancare/pana-cotta.jpg";
import Ecler from "./poze mancare/ecler.jpg";
import BanoffeePie from "./poze mancare/banoffee-pie.jpg";
import MiniTart from "./poze mancare/mini-tart.jpg";
import Muffins from "./poze mancare/muffins.jpg";
import {VscDiffAdded} from "react-icons/vsc";


export default function Desert(){
    return(
    <div><Menu/>
        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Tiramisu} alt="Imagine indisponibila." ></img>
            <h1>TIRAMISU</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Brownie} alt="Imagine indisponibila." ></img>
            <h1>BROWNIE</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {Lavacake} alt="Imagine indisponibila." ></img>
            <h1>LAVACAKE</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Cheesecake} alt="Imagine indisponibila." ></img>
            <h1>CHEESECAKE</h1>
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
            <img className="food_menu_imagine" src = {Profiteroles} alt="Imagine indisponibila." ></img>
            <h1>PROFITEROLES</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,cereals</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {ApplePie} alt="Imagine indisponibila." ></img>
            <h1>APPLE PIE</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,fruits,ice</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {LemonSlice} alt="Imagine indisponibila." ></img>
            <h1>LEMON SLICE</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,tomato,avocado,basil</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {PanaCotta} alt="Imagine indisponibila." ></img>
            <h1>PANA COTTTA</h1>
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
            <img className="food_menu_imagine" src = {Ecler} alt="Imagine indisponibila." ></img>
            <h1>ECLER</h1>
            <h3>Ingredients</h3>
            {/* <h3>yogurt</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {BanoffeePie} alt="Imagine indisponibila." ></img>
            <h1>BANOFFEE PIE</h1>
            <h3>Ingredients</h3>
            {/* <h3>apple,banana,strawberry</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {MiniTart} alt="Imagine indisponibila." ></img>
            <h1>MINI TART</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,vanilla</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {Muffins} alt="Imagine indisponibila." ></img>
            <h1>MUFFINS</h1>
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