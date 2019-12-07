import "./orderOverView.css";

import React, { Component } from "react";

import Header from "../../Components/SalerDashboard/Header/header";
import BreadCrumb from "../../Components/SalerDashboard/Order/OrderOverview/breadCrumb";
import Order from "../../Components/SalerDashboard/Order/OrderOverview/orderOverview";

class OrderOverView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid order-over-view-container">
          <div class="row">
            <div class="w-100">
              <Header />
            </div>
          </div>
          <div class="row pl-5 pr-5">
            <BreadCrumb />
          </div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row pt-4">
                <h4 class="order-over-view-title">Orders Overview</h4>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
                  <div class="row">
                    <div class="col-3 order-over-view-filter-text order-over-view-border-right text-danger">
                      Pending (10)
                    </div>
                    <div class="col-3 order-over-view-filter-text order-over-view-border-right">
                      Ready to ship (10)
                    </div>
                    <div class="col-3 order-over-view-filter-text order-over-view-border-right">
                      Shipped (10)
                    </div>
                    <div class="col-3 order-over-view-filter-text">
                      Completed (10)
                    </div>
                  </div>
                </div>
                <div class="col-0 col-sm-0 col-md-3 col-lg-5 col-xl-6"></div>
              </div>
              <div class="row mt-3 pb-4">
                <div class="w-100">
                  <Order />
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderOverView;
