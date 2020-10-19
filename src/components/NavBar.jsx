import React from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function NavBar() {
    let location = useLocation()
    const currentURL = endpoint =>{
        return location.pathname.includes(endpoint)
    }
    return( 
    <div id="navbar">
        <Link className={`nav-option ${currentURL("/Home") && "active"}`} to="/Home"> Home</Link>
        <Link className={`nav-option ${currentURL("/Search") && "active"}`} to="/Search"> Search</Link>
        <Link className={`nav-option ${currentURL("/Favourites") && "active"}`} to="/Favourites"> Favourites</Link>
        <div>
            <Link to="/Home">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt=""/>
            </Link>
        </div>
    </div>
    )
}