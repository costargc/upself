import React from "react";


// props.link = "../../assets/images/upsy_friend.svg"
function Chat_Img(props) {
    return (
        <div className="rcw-snippet">

            <img
                className=""
                src={props.link}
                width="95%"
                alt="check"
            />

        </div>
    );
}

export default Chat_Img;
