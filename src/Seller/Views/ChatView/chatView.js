import "./chatView.css";

import React, { Component } from "react";

import Header from "../../Components/SalerDashboard/Header/header";
import ChatBar from "../../Components/SalerDashboard/Chat/contactBar";
import MessageBody from "../../Components/SalerDashboard/Chat/messageBody";

class ChatView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div class="container-fluid">
          <div class="row">
            <div class="col-3">
              <div class="w-100 chat-view-contact-scroll">
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
                <ChatBar />
              </div>
            </div>
            <div class="col-9">
              <MessageBody />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatView;
