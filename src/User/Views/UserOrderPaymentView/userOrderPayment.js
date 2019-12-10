import React, { Component } from "react";

import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Header from "../../Components/Dashboard/Header/header";
import CategoryNavBar from "../../Components/LandingPage/CategoryDropDown/categoryDropDown";
import Summary from "../../Components/Cart/summary";
import Footer from "../../Components/LandingPage/Footer/footer";

class UserOrderPaymentView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Header />
        <div style={{ marginTop: "-40px", marginBottom: "2px" }}>
          <CategoryNavBar />
        </div>
        <div style={{ padding: "5% 10% 7% 10%" }}>
          <Summary />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UserOrderPaymentView;
