import "./orderInfoView.css";

import React, { Component } from "react";

import BreadCrumb from "../../Components//SalerDashboard/Order/OrderInformation/breadCrumb";
import Header from "../../Components/SalerDashboard/Header/header";
import OrderInfo from "../../Components/SalerDashboard/Order/OrderInformation/orderInformation";
import Dispatch from "../../Components/SalerDashboard/Order/OrderInformation/orderDispatch";

class OrderInfoView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid order-info-container">
          <div class="row">
            <div class="w-100">
              <Header />
            </div>
          </div>
          <div class="row pl-5 pr-5">
            <BreadCrumb />
          </div>
          <div class="row">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div class="row mt-4 pt-3">
                <OrderInfo />
              </div>
              <div class="row mt-4 pb-4">
                <Dispatch />
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderInfoView;
