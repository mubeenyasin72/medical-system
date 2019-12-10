import "./loginView.css";

import React, { Component } from "react";

import UserHeader from "../../Components/LandingPage/Header/header";
import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Footer from "../../Components/LandingPage/Footer/footer";
import UserLogin from "../../Components/Auth/Login/login";

class UserLoginView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />

        <UserHeader />

        <div class="row user-login-view-adjust">
          <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
          <div class="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
            <UserLogin />
          </div>
          <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
        </div>
        <div class="pt-5">
          <Footer />
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default UserLoginView;
