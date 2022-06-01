import { Link ,useHistory} from "react-router-dom"
import { Menu } from "./components/menu"
import Axios from "axios";
import { useState } from 'react';
import Login_container from "./components/login_container"
import {LoginContext} from "./Helpers/LoginContext"
import { useContext } from 'react';
import axios from "axios";


export default function Login(){

  const [Password,setPassword]=useState("");
  const {loggedIn,setLoggedIn,Email,setEmail,user,setUser}=useContext(LoginContext)
  var users ;
const history=useHistory();
const [component_list,setComponent]=useState();
 function add_component(){ setComponent(<span className="field_error">Email or Password doesn't match</span>)}
 
 
 async function sendGetRequest()
 {try{
  await axios.get('http://localhost:3001/select').then((res)=>{
      users=res.data
      // console.log("1",users)
      
    }).catch((err)=>{
      console.log(err)
    })}catch(err){
      console.log(err)
    }
  }
  async function submit (){
    await sendGetRequest();
      console.assert(Email!==null, "Email is null")
      console.assert(Email.includes("@"), "Email must include @")
      

    Axios.post('http://localhost:3001/verify-login',{
            Email:Email,
            Password:Password
        }).then((req, res)=>{
            console.log("Verified")
            console.log(req)
            setLoggedIn(true)
          var a=  users.filter((user)=>{
              if((user.Email==Email)&&(user.Password==Password)){
              
                console.assert(typeof(user.Email)=='string', "Email is not a string")
                console.assert(typeof(user.Phone_number)=='number', "Phone number is not a number")
                console.assert(typeof(user.Admin)=='boolean', "Admin is not a boolean")
                return user;
              }
              else 
              return 0
        
            }).map((user)=>{return user}) 
        // console.log("sss",a.data.Email)
   
       
        setUser(a[0]);
        
        
        // console.log("sss",a.Email)
            history.push('/')
        }).catch(()=>{
          console.log("User or password doesn't match ")
          add_component()
        
        });
      };
    return(
      <div>
    
      <Login_container title="Login"  >
 
       <div>
        <input className="text-input"type="text"  placeholder="E-mail adress"
         onChange={(event)=>setEmail(event.target.value)}/>

        <input className="text-input" type="password" placeholder="Password"
        onChange={(event)=>setPassword(event.target.value)}/>
        </div>
          {component_list} 
        {/* <Link to="/"> */}
          <button className="connect-input"type="submit" 
         onClick={submit}
        >
           Connect</button>
           {/* </Link> */}
  
      <div className='link-div'>  
        <Link  to="/passwordreset" className="App-link" >Forgot password? </Link>
        </div>
    
        <hr className="hr-text" data-content="OR"/>
         <Link to="/register"><button  className="connect-input register-button">Create new account</button></Link>
         </Login_container>
         </div>
        )
        }