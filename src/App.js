import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import TechUsed from "./components/TechUsed/TechUsed";
import WhatUpsyDo from "./components/WhatUpsyDo/WhatUpsyDo";

import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "./assets/images/upsy_emo/upsy1_emo1.svg";

class App extends Component {
  componentDidMount() {
    addResponseMessage("Hello! What would you like to tell Upsy?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };

  render() {
    return (
      <main className="App">
        <Landing />
        <WhatUpsyDo />
        <TechUsed />
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </main>
    );
  }
}

export default App;
