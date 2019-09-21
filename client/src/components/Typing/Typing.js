import React, { Component } from "react";
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

const dots = {
    display: "none",
}


class Typing extends Component {
    constructor(props) {
        super(props);
    }

    
    render(props) {
        if (this.props.isTyping) {
            console.log(`Typing: ${this.props.isTyping}`)
            return (
                <div>
                    {/* <img src="client\src\components\Typing\typingImage\Ripple-1.4s-200px.gif" /> */}
                    {/* <img src="https://media1.tenor.com/images/4543da9ae455b92fccebf272dd6ba752/tenor.gif?itemid=5803075" /> */}
                    <p>...</p>
                </div>
            )
        }

        return <div />

    }
}


export default Typing;
