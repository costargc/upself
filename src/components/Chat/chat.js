import React, { Component } from "react";
import "./chat.css";

import {
  Widget,
  addResponseMessage
  // ,addLinkSnippet,addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../assets/images/check/check1.svg";

const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2019-07-12",
  iam_apikey: "4qwcu7_ydMn0lH6Sb0lxlLOLMVxc44NK4UNVgjfM6tsV",
  url: "https://gateway.watsonplatform.net/natural-language-understanding/api"
});

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);

    const analyzeParams = {
      html:
        "<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don't like oranges.</p></body></html>",
      features: {
        emotion: {
          targets: ["apples", "oranges"]
        }
      }
    };

    naturalLanguageUnderstanding
      .analyze(analyzeParams)
      .then(analysisResults => {
        console.log(JSON.stringify(analysisResults, null, 2));
      })
      .catch(err => {
        console.log("error:", err);
      });

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
