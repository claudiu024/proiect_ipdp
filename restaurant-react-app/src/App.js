import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   
    // <body>
  
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
          href=""
       
          rel="noopener noreferrer"
        >
        Forgot password?
        </a>
        </div>
          <div className="line"></div>
        <button  href="register.html" className='connect-input register-button '> <Link to="/register" className="App-link">Create new account</Link></button>
       
    </div>
  //  </body>
  );
}


function Register() {
return(
  // <body>
      <div class="login-div">
          <h1 >Register</h1>
          <form action="register.js">
          <div className="user-div" style="margin: 0;">
          <input className="text-input input-register" type="text" id="user" name="user" placeholder="Nume"></input>
          <input className="text-input input-register"type="text" id="user" name="user" placeholder="Prenume"></input>
    
    
          <input className="text-input input-register"type="text" id="user" name="user" placeholder="E-mail adress"></input>
    
          <input className="text-input input-register" type="password" id="pwd" name="pwd" placeholder="Password"></input>
          <input className="text-input input-register" type="password" id="pwd" name="pwd" placeholder="Confirm Password"></input>
          </div>
          <input className="connect-input connect-input-register" type="submit" value="Create account" ></input>
          </form>
      </div>
  // </body>
)

  

}
export default App;
