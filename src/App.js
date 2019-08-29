import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import TechUsed from "./components/TechUsed/TechUsed";
import WhatUpsyDo from "./components/WhatUpsyDo/WhatUpsyDo";

import {
  Widget,
  addResponseMessage
  // ,addLinkSnippet,addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "./assets/images/check/check1.svg";

class App extends Component {
  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Hi! How are you doing today?");
    addResponseMessage("Hi! How are you doing today?");
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
          title="Chat with Upsy!"
          subtitle="And my cool subtitle"
        />
      </main>
    );
  }
}

export default App;
