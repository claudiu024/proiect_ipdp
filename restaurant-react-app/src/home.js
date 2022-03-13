import { Link } from "react-router-dom"
export default function Home(){
    return(
<div className="login-div">
        <h1>Login</h1>
       
        <div className="user-div">
      
        <input className="text-input"type="text"  placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" placeholder="Password"></input>
        </div>
        <input className="connect-input"type="submit" value="Connect" ></input>

      <div className='link-div'>
        <Link  to="/passwordreset" className="App-link" > Forgot password? </Link>
        </div>
          <div className="line"></div>
         <Link to="/register"><button  className='connect-input register-button'>Create new account</button></Link>

        </div>)
        }