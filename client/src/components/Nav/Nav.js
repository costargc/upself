import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Upself</Link>
            
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/swag">Swag Store</Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Nav