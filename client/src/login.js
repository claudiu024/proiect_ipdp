import { Link ,useHistory} from "react-router-dom"
import { Menu } from "./components/menu"
import Axios from "axios";
import { useState } from 'react';
import Login_container from "./components/login_container"



export default function Login(){
  const [Email,setEmail]=useState("");
  const [Password,setPassword]=useState("");

const history=useHistory();
const [component_list,setComponent]=useState();
 function add_component(){ setComponent(<span className="field_error">Email or Password doesn't match</span>)}
  const submit =()=>{

    Axios.post('http://localhost:3001/verify-login',{
            Email:Email,
            Password:Password
        }).then(()=>{
            console.log("Verified")
            // console.log(res)
            history.push('/')
        }).catch(()=>{
          console.log("User or password doesn't match ")
          add_component()
        
        });};
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