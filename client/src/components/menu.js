// import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {GiShoppingCart} from "react-icons/gi";
import {VscAccount} from "react-icons/vsc";
import {LoginContext} from "../Helpers/LoginContext"
import { useContext } from 'react';
import '../App.css';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

export function Menu ()
{    const {loggedIn,setLoggedIn}=useContext(LoginContext)
    const history=useHistory();
    function go_to_account(){
            if(!loggedIn){
                history.push("/login")
            }
            else
            history.push("/myaccount")
    }

    function ToogleLogin()
    {
        if(!loggedIn){
            history.push("/login")
        }else
        setLoggedIn(false)
    }

    return(
<div className='menu'>
<Link to="/"><AiOutlineHome className="home-logo"/></Link>
<Link to="/cart"><GiShoppingCart className="home-logo"/></Link>
<span  onClick={go_to_account}><VscAccount className="home-logo"/></span>

<h1 className="title-restaurant">Le Livré</h1>
<div className='vertical-align'>
    
    <Link to="/breakfast" className='menu-link'><h1 className="nav-bar">Breakfast</h1></Link>
    <Link to="/soup" className='menu-link'><h1 className="nav-bar">Soup</h1></Link>
    <Link to="/maindish" className='menu-link'><h1 className="nav-bar">Main Dish</h1></Link>
    <Link to="/desert" className='menu-link'><h1 className="nav-bar">Desert</h1></Link>
    <Link to="/drink" className='menu-link'><h1 className="nav-bar">Drink</h1></Link>
    <span onClick={ToogleLogin} className='menu-link'><h1 className="nav-bar">{loggedIn? "Logout" :"Login"
    }</h1></span>
</div>

<div className='container-contact'>
                <h3 className="text-contact">Contact details</h3>
                <h3 className="text-contact">+4028785977</h3>
                <h3 className="text-contact">andreea.haldan@gmail.com</h3>
                <h3 className="text-contact">Str. Alexandru Davila nr.6,Brasov</h3>
                <h3 className="text-contact">Program</h3>
                <h3 className="text-contact">Luni - Duminica</h3>
                <h3 className="text-contact">11:00 - 23:00</h3>
</div>

</div>
    )

}

