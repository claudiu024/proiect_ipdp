import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import ChickenNoodlesSoup from "./poze mancare/chicken-noodles-soup.jpg";
import PeaAndMintSoup from "./poze mancare/pea-and-mint-soup.jpg";
import CreamyCarrotSoup from "./poze mancare/creamy-carrot-soup.jpg";
import TomYum from "./poze mancare/tom-yum.jpg";
import ThreeBeanSoup from "./poze mancare/three-bean-soup.jpg";
import CaulyflowerSoup from "./poze mancare/caulyflower-soup.jpg";
import RamenSoup from "./poze mancare/ramen-soup.jpg";
import HotAndSourFishSoup from "./poze mancare/hot-and-sour-fish-soup.jpg";
import SweetPotatoSoup from "./poze mancare/sweet-potato-soup.jpg";
import FishSoup from "./poze mancare/fish-soup.jpg";
import ButterBeanSoup from "./poze mancare/butter-bean-soup.jpg";
import VerdantSoup from "./poze mancare/verdant-soup.jpg";
import {VscDiffAdded} from "react-icons/vsc";


export default function Soup(){
    return(
    <div><Menu/>
        <div className="food_menu_container">
            <div className="food_menu_row">
            <div className="content_menu">
            <img className="food_menu_imagine" src = {ChickenNoodlesSoup} alt="Imagine indisponibila." ></img>
            <h1>CHICKEN NOODLES</h1>
            <h3>Ingredients</h3>
            {/* <h3>egg,salt,piper</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {PeaAndMintSoup} alt="Imagine indisponibila." ></img>
            <h1>PEA AND MINT</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,flour,egg,nutella,fruits</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {CreamyCarrotSoup} alt="Imagine indisponibila." ></img>
            <h1>CREAMY CARROT</h1>
            <h3>Ingredients</h3>
            {/* <h3>flour,milk,egg,olive,butter</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {TomYum} alt="Imagine indisponibila." ></img>
            <h1>TOM YUM</h1>
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
            <img className="food_menu_imagine" src = {ThreeBeanSoup} alt="Imagine indisponibila." ></img>
            <h1>THREE BEAN</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,cereals</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {CaulyflowerSoup} alt="Imagine indisponibila." ></img>
            <h1>CAULYFLOWER</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,fruits,ice</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {RamenSoup} alt="Imagine indisponibila." ></img>
            <h1>RAMEN</h1>
            <h3>Ingredients</h3>
            {/* <h3>bread,tomato,avocado,basil</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {HotAndSourFishSoup} alt="Imagine indisponibila." ></img>
            <h1>HOT & SOUR FISH</h1>
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
            <img className="food_menu_imagine" src = {SweetPotatoSoup} alt="Imagine indisponibila." ></img>
            <h1>SWEET POTATO</h1>
            <h3>Ingredients</h3>
            {/* <h3>yogurt</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {FishSoup} alt="Imagine indisponibila." ></img>
            <h1>FISH</h1>
            <h3>Ingredients</h3>
            {/* <h3>apple,banana,strawberry</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu ">
            <img className="food_menu_imagine" src = {ButterBeanSoup} alt="Imagine indisponibila." ></img>
            <h1>BUTTER BEAN</h1>
            <h3>Ingredients</h3>
            {/* <h3>milk,vanilla</h3> */}
            <h1>5 euro</h1>
            <VscDiffAdded className="add_to_cart"/>
            </div>
            <div className="content_menu">
            <img className="food_menu_imagine" src = {VerdantSoup} alt="Imagine indisponibila." ></img>
            <h1>VERDANT</h1>
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