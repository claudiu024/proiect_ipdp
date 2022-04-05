import React ,{useState}from 'react';
import '../App.css';
import { Link } from "react-router-dom"
function PasswordResetCode()
{
  
    return(
        
    <div className="user-div">
        <input className="text-input larger-text"type="text"  placeholder="Code"></input>
        <input className="text-input larger-text"type="password"  placeholder="New Password"></input>

        <input className="text-input larger-text"type="password"  placeholder="Confirm New Password"></input>

        {/* <input className="connect-input connect-input-register" type="submit" value="Reset Password" ></input> */}
        <Link to="/login"><button  className="connect-input connect-input-register">Reset Password</button></Link>
        
    </div>
    )

}

export {PasswordResetCode};