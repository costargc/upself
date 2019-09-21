// what we need for this Typing component to work is a way for it to remove itself after a certain amount of time has passed.
// Anyone have ideas on how to do that? (I've tried a few things already, but if anyone us familiar this the following let me know):
    // unmountComponentAtNode()
    // componentWillUnmount()

import React, { Component } from "react";
import "react-chat-widget/lib/styles.css";

const dots = {
    width: "40px",
}

// const hide = {
//     display: "none"
// }


class Typing extends Component {

    // constructor() { }
    dismiss() {
        this.props.unmountMe();
    }

    render(props) {
        return (
            <div>
                <img style={dots} src={require("./typingImage/Ripple-1.4s-200px.gif")} />
            </div>
        );

        
    }
}


export default Typing;
