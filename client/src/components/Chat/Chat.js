import React, { Component } from "react";
import "./chat.css";
// import Chat_img from "../Chat_img/Chat_img";
import API from "../../utils/API";
import Typing from "../Typing/Typing";

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
  constructor(props) {
    super(props);
    this.state = {
      logo: logo,
      reload: false
    };
  }

  componentDidMount() {
    addResponseMessage("Hi! How are you doing today?");
  }

  // Used for single responses in the chat
  displayMessgae = response => {
    // shows the typing dots
    // -------> POSSIBLE FIX: IF THE CHAT BUTTON IS CLICKED, DON'T RENDERCUSTOMCOMPONENT. ONLY RENDER WHEN THE MESSGAE IS SUBMITTED (vs page is reloaded)
    renderCustomComponent(Typing, { reload: this.reload });

    // delaying the reply messgae to be 1 second (in the hops of having the Typing component display for that amount of time)
    setTimeout(() => {
      return addResponseMessage(`${response}`);
    }, 1000);
  };

  handleNewUserMessage = newMessage => {
    API.getMessageJaro(`${newMessage}`).then(response => {
      console.log(`${response}`);

      // check if the selected response is not a string (aka it's an array)
      const response1 = response;
      if (typeof response1 !== "string") {
        // this function will display the dots then the response, then more dots in sync
        (async function loop() {
          for (let i = 0; i < response1.length; i++) {
            // waits for the whole setTimeout to complete before moving to other indexes in the response array
            await new Promise(resolve => {
              renderCustomComponent(Typing, {});
              setTimeout(resolve, 1000);
            });

            // shows the typing dots when upsy is typing
            addResponseMessage(`${response1[i]}`);
            console.log("for loop: " + i);
          }
        })();
      } else {
        this.displayMessgae(`${response}`);
      }
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
