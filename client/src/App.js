import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import TechUsed from "./components/TechUsed/TechUsed";
import WhatUpsyDo from "./components/WhatUpsyDo/WhatUpsyDo";
import Chat from "./components/Chat/Chat";
import Nav from "./components/Nav/Nav"

class App extends Component {

  render() {
    return (
      <main className="App">
        <Nav />
        <Landing />
        <WhatUpsyDo />
        <TechUsed />
        <Chat />
      </main>
    );
  }
}

export default App;
