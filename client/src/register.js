import { useState } from 'react';
import './App.css';
import { Menu} from "./components/menu" ;
import Axios from "axios";
import Login_container from './components/login_container';
import { useHistory } from 'react-router-dom';
// import PhoneInput from 'react-phone-number-input'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
function Register(){
    const history=useHistory();
    const [component_list,setComponent]=useState();
    const [first_name, setfirst_name]=useState("");
    const [last_name,setlast_name]=useState("");
    const [Phone_number,setPhone_number]=useState("");
    const [Adress,setAdress]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [ConfirmPassword,setConfirmPassword]=useState("");

  
    function add_component(){ setComponent(<span className="field_error">Password doesn't match</span>)}
    const submit =(e)=>{  
         e.preventDefault();  //previne refresh-ul paginii
        
if(Password==ConfirmPassword ){
  
Axios.post('http://localhost:3001/create',{
        first_name:first_name,
        last_name:last_name,
        Phone_number:Phone_number,
        Adress:Adress,
        Email:Email,
        Password:Password
    }).then(()=>{
        history.push("/login")
        console.log("successefull insert")
       
    })}
    
    else {
      
        add_component();
        console.log("password doesn't match")
    }
  
    };
    return(
    
        <div>
        {/* <Menu/> */}
        <Login_container title="Register">
        <form onSubmit={submit}>
    
              <div className="user-div">
              <input className="text-input small-text" type="text" placeholder="First Name" required
               onChange={(event)=>setfirst_name(event.target.value)} />
           
              <input className="text-input small-text"type="text" placeholder="Last Name" required 
              onChange={(event)=>setlast_name(event.target.value)}/>

              <PhoneInput value={Phone_number} placeholder="Phone number" 
              required  
                country="ro" countryCodeEditable={false} enableSearch disableSearchIcon
                // containerStyle={{textAlign:'center'}}
                // dropdownClass={'x'}
               
                // containerClass="text-input larger-text"
                buttonClass="x"
                inputClass={'text-input larger-text'}
                // dropdownContainerClass="x"
              onChange={setPhone_number }/>

              <input className="text-input larger-text"type="text" placeholder="Adress(city, street, number, postal code)" 
              onChange={(event)=>setAdress(event.target.value)}/>

              <input className="text-input larger-text" type="email" placeholder="E-mail adress" required
              onChange={(event)=>setEmail(event.target.value)}/>

              <input className="text-input small-text" type="password" placeholder="Password" required
              onChange={(event)=>setPassword(event.target.value)}/>
              
              <input className="text-input small-text" type="password" placeholder="Confirm Password" required
              onChange={(event)=>setConfirmPassword(event.target.value)}/>
              </div>
              {component_list} 
             <input  className="connect-input connect-input-register" type="submit" value="Create account" >
                 {/* Create account */}
                 </input>
             </form>
          
             
              </Login_container>
            
          </div>
    
      
    )} 
  
    export default Register;