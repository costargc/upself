import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


function Nav() {
    return (
       <Router>
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand mb-0 h1">Home</Link>

                <a href="/swag" className="navbar-brand mb-0 h1">Swag Store</a>
                
        </nav>
        </Router>
    )
}

export default Nav