import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";



function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Home</Link>
            <Link target="_blank" to="/swag" className="navbar-brand mb-0 h1">Swag Store</Link>
        </nav>
    )
}

export default Nav