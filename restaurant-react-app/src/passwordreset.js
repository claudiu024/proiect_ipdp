import React ,{Component, useState}from 'react';
import './App.css';
// import Form from "react-bootstrap";
import {PasswordResetCode} from './components/Password_reset_code.js'



function PasswordReset()
{ 
    const [component_list,setComponent]=useState([]);
function add_component(){if (component_list.length==0) setComponent(component_list.concat(<PasswordResetCode key={component_list.length}/>))

}

    return(
       
    <div className="login-div">
        <h1 >Reset Password</h1>
        <div className="user-div">
       
        <input className="text-input input-register"type="text"  placeholder="E-mail adress"></input>

        </div>
        <button className="connect-input connect-input-register" onClick={add_component}>Send Code to E-mail</button>
        {component_list}
    </div>

    )
}

export default PasswordReset;