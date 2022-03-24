import { Link } from "react-router-dom"
import { Menu } from "./components/menu"
export default function Login(){
    return(
      <div>
      <Menu></Menu> 
<div className="login-div">
  {/*<form action="/"> */}
        <h1 className="login">Login</h1>
       
        <div className="user-div">
      
        <input className="text-input"type="text"  placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" placeholder="Password"></input>
        </div>
        <Link to="/"><button className="connect-input"type="submit">Connect</button></Link>
      {/*</form>*/}
      <div className='link-div'>
        <Link  to="/passwordreset" className="App-link" >Forgot password? </Link>
        </div>
          <div className="line">
            <hr></hr>
            </div>
        
         <Link to="/register"><button  className="connect-input register-button">Create new account</button></Link>
         </div>
        </div>)
        }