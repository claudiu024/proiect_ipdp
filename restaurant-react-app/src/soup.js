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

import Product from './components/product';
import Product_container from './components/product_container';

export default function Soup(){
    return(
    <div>
       
       <Product_container>
    <Product product_name="Chicken Noodles Soup" image={ChickenNoodlesSoup} price="4 euro"></Product>
            <Product product_name="Pea And Mint Soup " image={PeaAndMintSoup} price="4 euro"></Product>
            <Product product_name="Creamy Carrot Soup" image={CreamyCarrotSoup}  price="4 euro"></Product>
            <Product product_name="Tom Yum" image={TomYum} price="4 euro"></Product>
    </Product_container>
   
       
        <Product_container>
            <Product product_name="Three Bean Soup" image={ThreeBeanSoup} price="4 euro"></Product>
            <Product product_name="Caulyflower Soup" image={CaulyflowerSoup} price="4 euro"></Product>
            <Product product_name="Ramen Soup" image={RamenSoup}  price="4 euro"></Product>
            <Product product_name="Hot And Sour Fish Soup" image={HotAndSourFishSoup} price="4 euro"></Product>
        </Product_container>
        
        <Product_container data_aos="fade-up">
            <Product product_name="Sweet Potato Soup" image={SweetPotatoSoup} price="4 euro"></Product>
            <Product product_name="Fish Soup" image={FishSoup} price="4 euro"></Product>
            <Product product_name="Butter Bean Soup" image={ButterBeanSoup}  price="4 euro"></Product>
            <Product product_name="Verdant Soup" image={VerdantSoup} price="4 euro"></Product>
        </Product_container>
            </div>
            
    
    )
}