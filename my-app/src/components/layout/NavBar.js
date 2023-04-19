import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <div id="logo">
                <Link to="">Movie Search App</Link>
            </div>
            <ul>
                <li><Link to="">Search</Link></li>
                <li><Link to="watched">Watched</Link></li>
                <li><Link to="to-watch">Favorites</Link> </li>
            </ul>
        </header>
    )
}

export default NavBar