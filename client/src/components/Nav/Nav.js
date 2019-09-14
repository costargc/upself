import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shopping from "../../pages/Shopping/Shopping";

function Nav() {
    return (
        <Router>
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Home</span>

                <Route exact path="/swag" component={Shopping} render={() => <span className="navbar-brand mb-0 h1">Swag Store</span>} /> />
            
        </nav>
        </Router>
    )
}

export default Nav