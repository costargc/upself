import React, { Component } from "react";
import "react-chat-widget/lib/styles.css";

const dots = {
    width: "50px",
}

let myVar

class Typing extends Component {
constructor(props) {
    super (props);
    this.state = {
        dots: true,
        reload: false, // use this to determine how the chat is rendered
    }
}
    
    componentDidMount(props) {
        // check what button was clicked
        // update this.state.reload appropriately (false if from chat, true if from reload)
        // conditionally render the component to check for dots true/false and reload true/false
    }

    myVar = setTimeout(() => {
        this.setState({ dots: false })
    }, 990);

    clear = () => {
        if (!this.state.dot) {
            clearTimeout(myVar);
        }
    }


    render(props) {
        if (this.state.dots && !this.state.reload) {
            return (
                <div>
                    <img style={dots} alt="typing dots" src={require("./typingImage/Message-1s-200px.gif")} />
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Typing;

