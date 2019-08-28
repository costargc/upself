import React from "react";
import "./style.css";

function openChat(props) {
  return (
    <div class="wrapper-all">
      <div id="chat"></div>
      <div class="github">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="chat_img"
        />
        <div class="link">
          <a
            href="https://github.com/heysafronov/mangosteen-chat"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default openChat;
