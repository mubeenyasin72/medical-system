import React, { Component } from "react";

import Header from "../../Components/Dashboard/Header/header";
import ChatBar from "../../../Seller/Components/SalerDashboard/Chat/contactBar";
import MessageBody from "../../../Seller/Components/SalerDashboard/Chat/messageBody";
import Footer from "../../Components/LandingPage/Footer/footer";

class UserChatView extends Component {
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
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default UserChatView;
