import React ,{useState}from 'react';
import '../App.css';
function PasswordResetCode()
{
  
    
   // console.log("pressed")
    return(
        
    <div className="user-div">
        <input className="text-input input-register"type="text"  placeholder="Code"></input>
        <input className="text-input input-register"type="password"  placeholder="New Password"></input>

        <input className="text-input input-register"type="password"  placeholder="Confirm New Password"></input>

        <input className="connect-input connect-input-register" type="submit" value="Reset Password" ></input>
        
    </div>
    )

}

export {PasswordResetCode};