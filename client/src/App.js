import './App.css';
import Register from "./register"
import Home from "./home"
import Login from './login';
import MyAccount from './myaccount';
import PasswordReset from './passwordreset'
import Breakfast from './breakfast';
import Soup from './soup';
import MainDish from './maindish';
import Drink from './drink';
import Desert from './desert';
import Scroll_to_Top from './components/Scroll_to_Top';
import { Menu } from './components/menu';
import Login_container from './components/login_container';
import AddProduct  from './components/add_product';
import {LoginContext} from "./Helpers/LoginContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import { useState } from 'react';
import Cart from './Cart';


function App() {
  const [Email,setEmail]=useState("");
const [loggedIn,setLoggedIn]=useState(false);
const [user,setUser]=useState("")
// const [count, setCount] = useState(1);
const [breakfast,setBreakfast]=useState(null)
const [AddProductVisibility,setVisibility]=useState(false)
function addProduct(){
  setVisibility(true);
  console.log(AddProductVisibility) ;
}
  return (
    <LoginContext.Provider value={{loggedIn,setLoggedIn,Email,setEmail,user,setUser,breakfast,setBreakfast,AddProductVisibility,setVisibility}}>
  <Router> 

    <Scroll_to_Top/>
    <Menu/>
    {/* <Login_container/> */}
   {
   (user.Admin)? <button onClick={addProduct} className='add-product'>Add product</button> :" "} 
    { (AddProductVisibility)? <AddProduct/> : "" }
      <Switch>

          <Route path="/myaccount">
            <MyAccount />
          </Route>

          <Route path="/cart">
            <Cart 
            // setCount={setCount} count={count}
             />
          </Route>

        <Route path="/breakfast">
            <Breakfast />
          </Route>

          <Route path="/soup">
            <Soup />
          </Route>

          <Route path="/maindish">
            <MainDish />
          </Route>

          <Route path="/desert">
            <Desert />
          </Route>

          <Route path="/drink">
            <Drink />
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/passwordreset">
            <PasswordReset />
          </Route>

        </Switch>
   
  </Router> 
</LoginContext.Provider>
  );
        }

export default App;