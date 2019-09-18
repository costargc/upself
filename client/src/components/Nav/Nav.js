import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";



function Nav() {
    return (

        <div className="fixed-top" id="topnav">
            <nav className="navbar navbar-expand-sm navbar-custom">
                <Link className="navbar-brand" to="/">
                    <img style={{ paddingBottom: 15, margin: "auto" }}
                        src={require("../../assets/images/logo_upself.svg")}
                        width="80"
                        alt="logo"
                    />
                </Link>

                {/* <button id="sidebarCollapse" className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar-sidebar" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span >
                        <img
                            src={require("../../assets/images/check/check1.svg")}
                            width="20"
                            alt="logo"
                        />
                        <span id="menu">MENU</span>
                    </span>
                </button> */}


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/swag">Swag Store</Link>
                    </li>
                </ul>



            </nav>
        </div>
    )
}

export default Nav