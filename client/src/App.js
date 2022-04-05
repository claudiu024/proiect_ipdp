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
import Shop from './shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  return (
  <Router>
    <Scroll_to_Top/>
    <Menu/>
      <Switch>
      <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/myaccount">
            <MyAccount />
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
  );
        }

export default App;