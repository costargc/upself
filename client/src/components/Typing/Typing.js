import React, { Component } from "react";
import "react-chat-widget/lib/styles.css";

const dots = {
    width: "50px",
}

let myVar

class Typing extends Component {

    state = {
        dots: true,
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
        if (this.state.dots) {
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
