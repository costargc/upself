import React, { Component } from "react";
import "./chat.css";

import {
  Widget,
  addResponseMessage
  // ,addLinkSnippet,addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../assets/images/check/check1.svg";

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);

    addResponseMessage("I'm still learning!");
    // Now send the message throught the backend API
  };

  render() {
    return (
      <main className="Chat">
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

export default Chat;
