import React, { Component } from "react";
import "./chat.css";
// import Chat_img from "../Chat_img/Chat_img";
import API from "../../utils/API";

import {
  Widget,
  addResponseMessage
  // addLinkSnippet,
  // addUserMessage,
  // renderCustomComponent
  // setQuickButtons
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../assets/images/check/check1.svg";

class Chat extends Component {
  state = {
    logo: logo
  };

  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");

    // this is a text for the link
    // addLinkSnippet(
    //   {
    //     title: 'My awesome link',
    //     link: 'https://www.google.com',
    //     target: '_blank'
    //   }
    // );

    // white msg as a user - to be used after a button is clicked
    // addUserMessage("this is a test as a user");

    // renderCustomComponent(<Chat_img link="../../assets/images/upsy_friend.svg"/>);
    // renderCustomComponent(Chat_img,{link: require("../../assets/images/upsy_help.svg")},true);
  }

  handleNewUserMessage = newMessage => {
    // console.log(`New message incoming! ${newMessage}`);

    // removing ibm api for now
    // API.getMessageAnalysis(`${newMessage}`);
    // console.log(ChatbotDataset);

    // echo bot

    // smart lvl0 bot

    API.getMessageJaro(`${newMessage}`).then(function(response) {
      //check if array

      addResponseMessage(`${response}`);
      // console.log(response);
    });

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
