import React, { Component } from "react";
import "./chat.css";

import API from "../../utils/API";

import {
  Widget,
  addResponseMessage
  // ,addLinkSnippet,addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../assets/images/check/check1.svg";

class Chat extends Component {
  state = {
    logo: logo
  };

  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    API.getMessageAnalysis(`${newMessage}`);
    addResponseMessage("I'm still learning!");
    // Now send the message throught the backend API
  };

  render() {
    return (
      <main className="Chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={this.state.logo}
          title="Chat with Upsy!"
          subtitle="And my cool subtitle"
        />
      </main>
    );
  }
}

export default Chat;
