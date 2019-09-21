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
let myVar

class Typing extends Component {

    state = {
        dots: true,
    }

    // constructor() { }
    // dismiss() {
    //     this.props.unmountMe();
    // }

    
    myVar = setTimeout(() => {
        this.setState({ dots: false })
    }, 990);


    clear = () => {
        if (!this.state.dot) {
            clearTimeout(myVar);
        }
    }
    


    render(props) {
        if (this.state.dots) {
            return (
            <div>
                <img style={dots} alt="typing dots" src={require("./typingImage/Ripple-1.4s-200px.gif")} />
            </div>
            );
        }
        else {
            return null;
        }
        

        
    }
}


export default Typing;
