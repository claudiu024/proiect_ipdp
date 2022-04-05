import { Menu} from "./components/menu" ;
import Tiramisu from "./images/poze mancare/tiramisu.jpg";
import Brownie from "./images/poze mancare/brownie.jpg";
import Lavacake from "./images/poze mancare/lavacake.jpg";
import Cheesecake from "./images/poze mancare/cheesecake.jpg";
import Profiteroles from "./images/poze mancare/profiteroles.jpg";
import ApplePie from "./images/poze mancare/apple-pie.jpg";
import LemonSlice from "./images/poze mancare/lemon-slice.jpg";
import PanaCotta from "./images/poze mancare/pana-cotta.jpg";
import Ecler from "./images/poze mancare/ecler.jpg";
import BanoffeePie from "./images/poze mancare/banoffee-pie.jpg";
import MiniTart from "./images/poze mancare/mini-tart.jpg";
import Muffins from "./images/poze mancare/muffins.jpg";
import Product from './components/product';
import ProductContainer from './components/product_container';



export default function Desert(){
    return(
    <div>
             
        <ProductContainer>
            <Product product_name="Tiramisu" image={Tiramisu} price="4 euro"></Product>
            <Product product_name="Brownie " image={Brownie} price="4 euro"></Product>
            <Product product_name="Lavacake" image={Lavacake}  price="4 euro"></Product>
            <Product product_name="Cheesecake" image={Cheesecake} price="4 euro"></Product>
        </ProductContainer>
       
        <ProductContainer>
            <Product product_name="Profiteroles" image={Profiteroles} price="4 euro"></Product>
            <Product product_name="Apple Pie" image={ApplePie} price="4 euro"></Product>
            <Product product_name="Lemon Slice" image={LemonSlice}  price="4 euro"></Product>
            <Product product_name="Pana Cotta" image={PanaCotta} price="4 euro"></Product>
        </ProductContainer>
        
        <ProductContainer data_aos="fade-up">
            <Product product_name="Ecler" image={Ecler} price="4 euro"></Product>
            <Product product_name="Banoffee Pie" image={BanoffeePie} price="4 euro"></Product>
            <Product product_name="Mini Tart" image={MiniTart}  price="4 euro"></Product>
            <Product product_name="Muffins" image={Muffins} price="4 euro"></Product>
        </ProductContainer>

            </div>
            
    
    )
}