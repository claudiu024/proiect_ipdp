import React ,{Component, useState}from 'react';
import './App.css';
import { Menu } from "./components/menu"

import {PasswordResetCode} from './components/Password_reset_code.js'

function PasswordReset()
{ 
    const [component_list,setComponent]=useState([]);
function add_component(){if (component_list.length==0) setComponent(component_list.concat(<PasswordResetCode key={component_list.length}/>))

}

    return(
     <div>
    <Menu></Menu>
    <div className="login-div">
        <h1 >Reset Password</h1>
        <div className="user-div">
       
        <input className="text-input larger-text"type="text"  placeholder="E-mail adress"></input>

        </div>
        <button className="connect-input connect-input-register" onClick={add_component}>Send Code to E-mail</button>
        {component_list}
    </div>
    </div> 
    )
}

export default PasswordReset;