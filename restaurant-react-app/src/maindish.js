
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
import Product from './components/product';
import Product_container from './components/product_container';


export default function MainDish(){
    return(
    <div>
      <Product_container>
    <Product  product_name="Carbonara" image={Carbonara} price="4 euro"></Product>
            <Product product_name="Salmon Pasta " image={SalmonPasta} price="4 euro"></Product>
            <Product product_name="Beef Wellington" image={BeefWellington}  price="4 euro"></Product>
            <Product product_name="Beef Steak" image={BeefSteak} price="4 euro"></Product>
    </Product_container>
   
       
        <Product_container >
            <Product  product_name="Greek Salad" image={GreekSalad} price="4 euro"></Product>
            <Product product_name="Vegetables" image={Vegetables} price="4 euro"></Product>
            <Product product_name="Lasagna" image={Lasagna}  price="4 euro"></Product>
            <Product product_name="Porchetta" image={Porchetta} price="4 euro"></Product>
        </Product_container>
        
        <Product_container data_aos="fade-up">
            <Product product_name="Risotto" image={Risotto} price="4 euro"></Product>
            <Product product_name="Duck" image={Duck} price="4 euro"></Product>
            <Product product_name="Chicken" image={Chicken}  price="4 euro"></Product>
            <Product product_name="Seared Salmon" image={SearedSalmon} price="4 euro"></Product>
        </Product_container>
            </div>
            
    
    )
}