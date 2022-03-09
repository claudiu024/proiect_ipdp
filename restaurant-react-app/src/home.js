import { Link } from "react-router-dom"
export default function Home(){
    return(
<div className="login-div">
        <h1>RESTAURANT</h1>
        <form action="">
        <div className="user-div">
      
        <input className="text-input"type="text" id="user" name="user" placeholder="E-mail adress"></input>
  
        <input className="text-input" type="password" id="pwd" name="pwd" placeholder="Password"></input>
        </div>
        <input className="connect-input"type="submit" value="Connect" ></input>

        </form>
      <div className='link-div'>
        <a
          className="App-link"
          href="register.html"
       
          rel="noopener noreferrer"
        >
        Forgot password?
        </a>
        </div>
          <div className="line"></div>
         <Link to="/register"><button  className='connect-input register-button'>Create new account</button></Link>
        </div>)}