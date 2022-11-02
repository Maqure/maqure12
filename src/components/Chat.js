import React from "react";
import "../CSS/chat.css";

export default function hello() {
  return (
    <div className="message_box">
      <h1>Hi There!</h1>
      <p>
        Talk To Our experts regarding any of your qvestion We available 24*7
      </p>
      <div className="chat_outer">
        <div className="chat_inner">
          <a href="https://api.whatsapp.com/send?phone=919001773171&text=Vikram%20kumar">
            {" "}
            <p>Chat with us on whats app</p>
            
          </a>
        </div>
      </div>
    </div>
  );
}
