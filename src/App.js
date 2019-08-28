import React, { Component } from "react";
import "./assets/css/App.css";
import HeaderMain from "./components/HeaderMain";
import TechUsed from "./components/TechUsed";
import WhatUpsyDo from "./components/WhatUpsyDo";
import { Widget } from "react-chat-widget";

class App extends Component {
  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <main className="App">
        <HeaderMain />
        <WhatUpsyDo />
        <TechUsed />
        <Widget />
      </main>
    );
  }
}

export default App;
