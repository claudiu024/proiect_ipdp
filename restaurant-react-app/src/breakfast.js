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
import Product from './components/product';
import Product_container from './components/product_container';

export default function Breakfast(){
    return(
    <div>
        
     
<Product_container>
    <Product product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro"></Product>
            <Product product_name="Pancakes " image={Pancakes} price="4 euro"></Product>
            <Product product_name="Croissant" image={Croissant}  price="4 euro"></Product>
            <Product product_name="Sandwich" image={Sandwich} price="4 euro"></Product>
                </Product_container>
   
       
        <Product_container>
            <Product product_name="Cereals" image={Cereals} price="4 euro"></Product>
            <Product product_name="Smoothie Bowl" image={SmoothieBowl} price="4 euro"></Product>
            <Product product_name="French Plateau" image={FrenchPlateau}  price="4 euro"></Product>
            <Product product_name="Bruschetta" image={Bruschetta} price="4 euro"></Product>
        </Product_container>
        
        <Product_container data_aos="fade-up">
            <Product product_name="Yogurt" image={Yogurt} price="4 euro"></Product>
            <Product product_name="Fruit Salad" image={FruitSalad} price="4 euro"></Product>
            <Product product_name="Oats" image={Oats}  price="4 euro"></Product>
            <Product product_name="Chia Pudding" image={ChiaPudding} price="4 euro"></Product>
        </Product_container>
        
       </div>     
             
    )
}