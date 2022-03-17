import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export function Menu ()
{

    return(
<div className='menu'>

    <div className='vertical-align'>
    <Link to="/"><h1 className="nav-bar">Home</h1></Link>
<h1 className="nav-bar">My account</h1>
<h1 className="nav-bar">Shopping cart</h1>
<h1 className="nav-bar">Food Menu</h1>
<h1 className="nav-bar">Drinks</h1>
<h1 className="nav-bar">Gallery</h1>
<Link to="/login" ><h1 className="nav-bar">Login</h1></Link>
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

