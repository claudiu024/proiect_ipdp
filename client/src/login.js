import { Link } from "react-router-dom"
import { Menu } from "./components/menu"
import Login_container from "./components/login_container"
export default function Login(){
    return(
      <div>
      {/* <Menu></Menu>  */}
      <Login_container title="Login">
 
       
        <input className="text-input"type="text"  placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" placeholder="Password"></input>
        
        <Link to="/"><button className="connect-input"type="submit">Connect</button></Link>
  
      <div className='link-div'>
        <Link  to="/passwordreset" className="App-link" >Forgot password? </Link>
        </div>
    
        <hr className="hr-text" data-content="OR"/>
         <Link to="/register"><button  className="connect-input register-button">Create new account</button></Link>
         </Login_container>
         </div>
        )
        }