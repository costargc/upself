import React, { Component } from "react";
import "./chat.css";
import API from "../../utils/API";
import {
    // Widget,
    // addResponseMessage,
    // addLinkSnippet,
    // addUserMessage,
    renderCustomComponent
    // setQuickButtons
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";



function handleTyping(props) {
    const isTyping = props.state.isTyping

    if (isTyping) {
        return (
            <img src="../../assets/images/typing"></img>
        )
    }
}

export default handleTyping;
