import React, { Component } from "react";
import "./chat.css";
// import Chat_img from "../Chat_img/Chat_img";
import API from "../../utils/API";
import Typing from "../Typing/Typing"


import {
  Widget,
  addResponseMessage,
  // addLinkSnippet,
  // addUserMessage,
  renderCustomComponent
  // setQuickButtons
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../assets/images/check/check1.svg";


class Chat extends Component {
  state = {
    logo: logo,
    isTyping: true
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

    console.log(`State: ${this.state.isTyping}`)
    
    renderCustomComponent(Typing, {isTyping: this.state.isTyping})
    // renderCustomComponent(Typing)

      
    API.getMessageJaro(`${newMessage}`).then(function (response) {
      
      const response1 = response
      // check if the selected response is not a string (aka it's an array)
      if (typeof response1 !== "string" ) {
        
        // loop through the array and append the message on the page
        for (var i = 0; i < response1.length; i++) {
          addResponseMessage(`${response1[i]}`)
        }
      }

      else {
        addResponseMessage(`${response}`);
      }

     
      console.log(response);
    });

    // Now send the message throught the backend API
  };


  handleTyping = () => {
    if (this.state.isTyping) {
      this.setState({ isTyping: false })
    }
    else {
      this.setState({ isTyping: true })
    }
  }


  render() {
    return (
      <main className="Chat">
        {/* <Typing /> */}
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
