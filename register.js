import './App.css';


function Register(){
    return(
    
      
          <div class="login-div">
              <h1 >Register</h1>
              <form action="register.js">
              <div className="user-div">
              <input className="text-input input-register" type="text" placeholder="Nume"></input>
              <input className="text-input input-register"type="text" placeholder="Prenume"></input>
        
        
              <input className="text-input input-register"type="text" placeholder="E-mail adress"></input>
        
              <input className="text-input input-register" type="password" placeholder="Password"></input>
              <input className="text-input input-register" type="password" placeholder="Confirm Password"></input>
              </div>
              <input className="connect-input connect-input-register" type="submit" value="Create account" ></input>
              </form>
          </div>
    
    
      
    )}
    export default Register;