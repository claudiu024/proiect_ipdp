import { Link } from "react-router-dom"
import { Menu } from "./components/menu"
export default function Login(){
    return(
      <div>
      <Menu></Menu> 
<div className="login-div">
  <form action="/"> 
        <h1 className="login">Login</h1>
       
        <div className="user-div">
      
        <input className="text-input"type="text"  placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" placeholder="Password"></input>
        </div>
        <input className="connect-input"type="submit" value="Connect" ></input>
      </form>
      <div className='link-div'>
        <Link  to="/passwordreset" className="App-link" >Forgot password? </Link>
        </div>
          <div className="line">
            <hr></hr>
            {/* or<hr></hr> */}
            </div>
        
         <Link to="/register"><button  className='connect-input register-button'>Create new account</button></Link>
         </div>
        </div>)
        }