import "./forgotView.css";

import React, { Component } from "react";

import UserHeader from "../../Components/LandingPage/Header/header";
import Footer from "../../Components/LandingPage/Footer/footer";
import UserForgot from "../../Components/Auth/ForgotPassword/forgotPassword";

class UserForgotView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="w-100">
              <UserHeader />
            </div>
          </div>
          <div class="row">
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
            <div class="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
              <UserForgot />
            </div>
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
          </div>
          <div class="row pt-5">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserForgotView;
