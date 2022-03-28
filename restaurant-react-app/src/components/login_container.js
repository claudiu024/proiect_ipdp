import React, { Component } from 'react'

export function login_container(props) {

    return (
        <div className="login-div">
        <h1 className="login">{props.title}</h1>
       <div className="user-div">
       {props.children}
      </div>
      </div>
    )

}

export default login_container