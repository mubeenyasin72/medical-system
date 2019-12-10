import React, { Component } from "react";

import TopNavBar from "../../Components/LandingPage/TopNavBar/topNavBar";
import Header from "../../Components/LandingPage/Header/header";
import TrackingOrder from "../../Components/LandingPage/OrderTracking/orderTracking";
import Footer from "../../Components/LandingPage/Footer/footer";

class TrackOrder extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <Header />
        <div style={{ marginTop: "-49px", marginBottom: "-20px" }}>
          <TrackingOrder />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TrackOrder;
