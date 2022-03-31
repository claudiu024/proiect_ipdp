import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {GiShoppingCart} from "react-icons/gi";
import {VscAccount} from "react-icons/vsc";
import '../App.css';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

export function Menu ()
{

    return(
<div className='menu'>
<Link to="/"><AiOutlineHome className="home-logo"/></Link>
<Link to="/shop"><GiShoppingCart className="home-logo"/></Link>
<Link to="/"><VscAccount className="home-logo"/></Link>
<h1 className="title-restaurant">Le Livré</h1>
<div className='vertical-align'>
    <Link to="/breakfast" className='menu-link'><h1 className="nav-bar">Breakfast</h1></Link>
    <Link to="/soup" className='menu-link'><h1 className="nav-bar">Soup</h1></Link>
    <Link to="/maindish" className='menu-link'><h1 className="nav-bar">Main Dish</h1></Link>
    <Link to="/desert" className='menu-link'><h1 className="nav-bar">Desert</h1></Link>
    <Link to="/drink" className='menu-link'><h1 className="nav-bar">Drink</h1></Link>
    <Link to="/login" className='menu-link'><h1 className="nav-bar">Login</h1></Link>
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

