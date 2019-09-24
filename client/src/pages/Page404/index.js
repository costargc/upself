import React, { Component } from "react";
import "../../App.css";
import OopsiUpsy from "../../components/OopsiUpsy/OopsiUpsy";
import Nav from "../../components/Nav/Nav";

class Page404 extends Component {

    render() {
        return (
            <main className="App">
                <Nav />
                <OopsiUpsy />
            </main>
         
        );
    }
}

export default Page404;