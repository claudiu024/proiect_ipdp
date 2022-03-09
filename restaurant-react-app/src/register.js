import './App.css';


function Register(){
    return(
    
      <body>
          <div class="login-div">
              <h1 >Register</h1>
              <form action="register.js">
              <div className="user-div">
              <input className="text-input input-register" type="text" id="user" name="user" placeholder="Nume"></input>
              <input className="text-input input-register"type="text" id="user" name="user" placeholder="Prenume"></input>
        
        
              <input className="text-input input-register"type="text" id="user" name="user" placeholder="E-mail adress"></input>
        
              <input className="text-input input-register" type="password" id="pwd" name="pwd" placeholder="Password"></input>
              <input className="text-input input-register" type="password" id="pwd" name="pwd" placeholder="Confirm Password"></input>
              </div>
              <input className="connect-input connect-input-register" type="submit" value="Create account" ></input>
              </form>
          </div>
      </body>
    
      
    )}
    export default Register;