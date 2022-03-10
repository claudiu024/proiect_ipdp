import React from 'react';
import './App.css';
//import Form from "react-bootstrap";

function PasswordReset()
{
    return(
       
    <div className="login-div">
        <h1 >Reset Password</h1>
        <form onSubmit={PasswordResetCode}>
        <div className="user-div">
       
        <input className="text-input input-register"type="text"  placeholder="E-mail adress"></input>

        </div>
        <button className="connect-input connect-input-register" onClick={PasswordResetCode}>Send Code to E-mail</button>
        {/* <PasswordResetCode /> */}
        </form>
    </div>

    )
}

function PasswordResetCode()
{console.log("pressed")
    return(
        
    
        
        <div className="user-div">
        <input className="text-input input-register"type="text"  placeholder="Code"></input>
        <input className="text-input input-register"type="password"  placeholder="New Password"></input>

        <input className="text-input input-register"type="password"  placeholder="Confirm New Password"></input>


        
        <input className="connect-input connect-input-register" type="submit" value="Reset Password" ></input>
        
    </div>
    )

}

export default PasswordReset;