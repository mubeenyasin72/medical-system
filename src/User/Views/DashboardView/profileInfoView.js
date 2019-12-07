import "./dashboardView.css";

import React, { Component } from "react";

import UserHeader from "../../Components/Dashboard/Header/header";
import Footer from "../../Components/LandingPage/Footer/footer";
import UserSideBar from "../../Components/Dashboard/SideBar/sideBar";
import UserProfileInfo from "../../Components/Dashboard/ProfileInfo/profileInfo";
import UserBillingInfo from "../../Components/Dashboard/BillingInfo/billingInfo";
import UserBankInfo from "../../Components/Dashboard/BankInfo/bankInfo";

class UserDashboardView extends Component {
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
          <div class="row pt-4">
            <div class="col-3">
              <UserSideBar bg="profile" />
            </div>
            <div class="col-9">
              <UserProfileInfo />
            </div>
          </div>
          <div class="row pt-4">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDashboardView;
