import { Menu} from "./components/menu" ;
import Carbonara from "./images/poze mancare/carbonara.jpg";
import SalmonPasta from "./images/poze mancare/salmon-pasta.jpg";
import BeefWellington from "./images/poze mancare/beef-wellington.jpg";
import BeefSteak from "./images/poze mancare/beef-steak.jpg";
import GreekSalad from "./images/poze mancare/greek-salad.jpg";
import Vegetables from "./images/poze mancare/vegetables.jpg";
import Lasagna from "./images/poze mancare/lasagna.jpg";
import Porchetta from "./images/poze mancare/porchetta.jpg";
import Risotto from "./images/poze mancare/risotto.jpg";
import Duck from "./images/poze mancare/duck.jpg";
import Chicken from "./images/poze mancare/chicken.jpg";
import SearedSalmon from "./images/poze mancare/seared-salmon.jpg";
import Product from './components/product';
import ProductContainer from './components/product_container';


export default function MainDish(){
    return(
    <div>
      <ProductContainer>
            <Product  product_name="Carbonara" image={Carbonara} price={4}></Product>
            <Product product_name="Salmon Pasta " image={SalmonPasta} price={4}></Product>
            <Product product_name="Beef Wellington" image={BeefWellington}  price={4}></Product>
            <Product product_name="Beef Steak" image={BeefSteak} price={4}></Product>
    </ProductContainer>
   
       
        <ProductContainer >
            <Product  product_name="Greek Salad" image={GreekSalad} price={4}></Product>
            <Product product_name="Vegetables" image={Vegetables} price={4}></Product>
            <Product product_name="Lasagna" image={Lasagna}  price={4}></Product>
            <Product product_name="Porchetta" image={Porchetta} price={4}></Product>
        </ProductContainer>
        
        <ProductContainer data_aos="fade-up">
            <Product product_name="Risotto" image={Risotto} price={4}></Product>
            <Product product_name="Duck" image={Duck} price={4}></Product>
            <Product product_name="Chicken" image={Chicken}  price={4}></Product>
            <Product product_name="Seared Salmon" image={SearedSalmon} price={4}></Product>
        </ProductContainer>
            </div>
            
    
    )
}