import './App.css';
import { Menu } from "./components/menu"

function Register(){
    return(
    
        <div>
        <Menu></Menu> 
          <div class="login-div">
              <h1 >Register</h1>
              <form action="login">
              <div className="user-div">
              <input className="text-input small-text" type="text" placeholder="First Name" ></input>
              <input className="text-input small-text"type="text" placeholder="Last Name"></input>
              <input className="text-input larger-text" type="text" placeholder="Phone number"></input>
              <input className="text-input larger-text"type="text" placeholder="Adress(city, street, number, postal code)"></input>
              <input className="text-input larger-text"type="text" placeholder="E-mail adress"></input>
              <input className="text-input small-text" type="password" placeholder="Password"></input>
              <input className="text-input small-text" type="password" placeholder="Confirm Password"></input>
              </div>
              <input className="connect-input connect-input-register" type="submit" value="Create account" ></input>
              </form>
          </div>
          </div>
    
      
    )}
    export default Register;