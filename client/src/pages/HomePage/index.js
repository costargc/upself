import React, { Component } from "react";
import "../../App.css";
import Landing from "../../components/Landing/Landing";
import TechUsed from "../../components/TechUsed/TechUsed";
import WhatUpsyDo from "../../components/WhatUpsyDo/WhatUpsyDo";
import Chat from "../../components/Chat/Chat";
import Team from "../../components/Team/Team";
import MidImage from "../../components/MidImage/MidImage";
import Nav from "../../components/Nav/Nav";

class HomePage extends Component {

    render() {
        return (
            <main className="App">
                <Nav />
                <Landing />
                <WhatUpsyDo />
                <TechUsed />
                <Chat />
                <MidImage />
                <Team />
            </main>

        );
    }
}

export default HomePage;