import React, { Component } from "react";

import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Header from "../../Components/Dashboard/Header/header";
import CategoryNavBar from "../../Components/LandingPage/CategoryDropDown/categoryDropDown";
import DeliveryAddress from "../../Components/Cart/deliveryAddress";
import Footer from "../../Components/LandingPage/Footer/footer";

class UserAddressView extends Component {
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
          <DeliveryAddress />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UserAddressView;
