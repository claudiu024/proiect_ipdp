import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import Axios from "axios";
import Login_container from './components/login_container';
import { Link } from 'react-router-dom';
// import {PasswordReset} from './  /passwordreset.js'

function Register(){
    const [first_name, setfirst_name]=useState("");
    const [last_name,setlast_name]=useState("");
    const [Phone_number,setPhone_number]=useState("");
    const [Adress,setAdress]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");

    const submit =()=>{
// console.log(first_name)
Axios.post('http://localhost:4060/create',{
        first_name:first_name,
        last_name:last_name,
        Phone_number:Phone_number,
        Adress:Adress,
        Email:Email,
        Password:Password
    }).then(()=>{
        console.log("successefull insert")
    });};
    return(
    
        <div>
        <Menu/>
        <Login_container title="Register">
        
              {/* <form action="login"> */}
              <div className="user-div">
              <input className="text-input small-text" type="text" placeholder="First Name" 
               onChange={(event)=>setfirst_name(event.target.value)} />
           
              <input className="text-input small-text"type="text" placeholder="Last Name"
              onChange={(event)=>setlast_name(event.target.value)}/>

              <input className="text-input larger-text" type="text" placeholder="Phone number"
              onChange={(event)=>setPhone_number(event.target.value)}/>

              <input className="text-input larger-text"type="text" placeholder="Adress(city, street, number, postal code)"
              onChange={(event)=>setAdress(event.target.value)}/>

              <input className="text-input larger-text"type="text" placeholder="E-mail adress"
              onChange={(event)=>setEmail(event.target.value)}/>

              <input className="text-input small-text" type="password" placeholder="Password"
              onChange={(event)=>setPassword(event.target.value)}/>
              
              <input className="text-input small-text" type="password" placeholder="Confirm Password"/>
              </div>
             <Link  to= "/passwordreset"><button onClick={submit} className="connect-input connect-input-register" type="submit" value="Create account" >Create account</button>
             </Link> 
              {/* </form> */}
              {/* </div> */}
              </Login_container>
            
          </div>
    
      
    )} 
  
    export default Register;