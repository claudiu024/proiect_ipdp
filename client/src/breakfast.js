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

export default function Breakfast(){
    return(
    <div>
        
     
<ProductContainer>
    <Product product_name="Scrambled Eggs" image={ScrambledEggs} price="4 euro"></Product>
            <Product product_name="Pancakes " image={Pancakes} price="4 euro"></Product>
            <Product product_name="Croissant" image={Croissant}  price="4 euro"></Product>
            <Product product_name="Sandwich" image={Sandwich} price="4 euro"></Product>
                </ProductContainer>
   
       
        <ProductContainer>
            <Product product_name="Cereals" image={Cereals} price="4 euro"></Product>
            <Product product_name="Smoothie Bowl" image={SmoothieBowl} price="4 euro"></Product>
            <Product product_name="French Plateau" image={FrenchPlateau}  price="4 euro"></Product>
            <Product product_name="Bruschetta" image={Bruschetta} price="4 euro"></Product>
        </ProductContainer>
        
        <ProductContainer data_aos="fade-up">
            <Product product_name="Yogurt" image={Yogurt} price="4 euro"></Product>
            <Product product_name="Fruit Salad" image={FruitSalad} price="4 euro"></Product>
            <Product product_name="Oats" image={Oats}  price="4 euro"></Product>
            <Product product_name="Chia Pudding" image={ChiaPudding} price="4 euro"></Product>
        </ProductContainer>
        
       </div>     
             
    )
}