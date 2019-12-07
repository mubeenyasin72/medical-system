import "./orderInformation.css";

import React, { Component } from "react";

class OrderInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid bg-white">
          <div class="row">
            {/* <div class="col-1"></div> */}
            <div class="col-12">
              {/* Order Info Title */}
              <div class="row">
                <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <span class="ml-3">
                      Order Number: 819237918237
                    </span>
                  </div>
                </div>
                <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <h4 class="order-info-title">Order Information</h4>
                  </div>
                </div>
              </div>
              {/* Order Product Name */}
              <div class="row mt-3">
                <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <div class="product-name-body-title">Product Name</div>
                  </div>
                </div>
                <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <input
                      class="form-control order-info-input"
                      placeholder="Product name"
                    />
                  </div>
                </div>
              </div>
              {/* Delivery Address */}
              <div class="row mt-5">
                <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <div class="product-name-body-title">Delivery Address</div>
                  </div>
                </div>
                <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <textarea
                      placeholder="Accurate address for fast delivery"
                      class="form-control order-info-textarea"
                    />
                  </div>
                </div>
              </div>
              {/* Time to dispatch */}
              <div class="row mt-4 pb-5">
                <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <div class="product-name-body-title">Time to dispatch</div>
                  </div>
                </div>
                <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <h5 class="order-info-time-remaining">
                      <span class="">4 hours Remaining</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-1"></div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderInfo;
