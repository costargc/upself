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
  

  constructor() {
    super()
    this.state = { renderChild: true };
    // this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  state = {
    logo: logo,
    // renderChild: true,
  };

  // possible use for the unmount? (not sure how to get this working)
  // handleChildUnmount() {
  //   this.setState({ renderChild: false });
  // }

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
 
  displayMessgae = response => {
    renderCustomComponent(Typing, {}, true)
    // delaying the reply messgae to be 1 second (in the hops of having the Typing component display for that amount of time)
    setTimeout(() => {

      return addResponseMessage(`${response}`)

    }, 1000)
    
  }


  handleNewUserMessage = newMessage => {
  
    // this.setState({isTyping: true})
    
    // this will pass the component Typing in, but we need that component to destroy itself... not sure how to do that
    // renderCustomComponent(Typing, {}, true)

    API.getMessageJaro(`${newMessage}`).then((response) => {
      console.log(`${response}`)

      // check if the selected response is not a string (aka it's an array)
      const response1 = response
      if (typeof response1 !== "string" ) {
        
        // loop through the array and append the message on the page
        // for (var i = 0; i < response1.length; i++) {
        //   renderCustomComponent(Typing, {}, true)
        //   // this.displayMessgae(`${response1[i]}`)
        //   // addResponseMessage(`${response1[i]}`)

        //     setTimeout(() => {
        //       addResponseMessage(`${response}`)
        //     }, 1000)            
        // }
        (async function loop() {
          for (let i = 0; i < response1.length; i++) {

            await new Promise(resolve => {
              renderCustomComponent(Typing, {}, true)
              setTimeout(resolve, 1000)

            });

            addResponseMessage(`${response1[i]}`)
            console.log("for loop: " + i);
            
          }
        })();
      }

      else {
        console.log("waiting....")
        this.displayMessgae(`${response}`)
        // addResponseMessage(`${response}`)
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
