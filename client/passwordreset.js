import React ,{Component, useState}from 'react';
import './App.css';
import {useTransition,animated} from "react-spring"
import { Menu } from "./components/menu"

import {PasswordResetCode} from './components/Password_reset_code.js'

function PasswordReset()
{   
    const [component_list,setComponent]=useState(); 
    const [IsVisible,setIsVisible]=useState();
    const transition=useTransition(IsVisible,{
      config:{duration: 500},
  
      from:{ opacity:0 },
      enter:{opacity:1},
      leave:{opacity:0}
    })
// function add_component(){if (component_list.length==0) setComponent(component_list.concat(<PasswordResetCode key={component_list.length}/>))

// }
function add_component()

{

setIsVisible(v=>v=true);
}

    return(
     <div>
    {/* <Menu></Menu> */}
    <div className="login-div">
        <h1 >Reset Password</h1>
        <div className="user-div">
       
        <input className="text-input larger-text"type="text"  placeholder="E-mail adress"></input>

        </div>
        <button className="connect-input connect-input-register" onClick={add_component}>Send Code to E-mail</button>
        {/* {component_list} */}
      
        <div>{transition((style,item)=>
         item ?<animated.div style={style} >
     <PasswordResetCode/>
          
         </animated.div>:" ")}
         </div>
    </div>
    </div> 
    )
}

export default PasswordReset;