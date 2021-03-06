import React, { Component } from "react";
import "./orderTracking.css";

class OrderTracking extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="section">
          <h1 class="track-order-header">Track Your Order</h1>
          <div class="order-track-container">
            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  placeholder="Tracking Number"
                  class="form-control order-tracking-text-field"
                  style={{ marginBottom: "60px" }}
                />
              </div>
              <div class="col-4">
                <button class="btn track-order-button">Track Order</button>
              </div>
              <div class="col-4 "></div>
            </div>
            <div class="border-s"></div>
            <div class="dashed">
              <div class="circle"></div>
              <div class="circle circle-c"></div>
              <div class="circle special sc">
                <i class="fa fa-male track-fa-male fa-2x text-white"></i>
              </div>

              <div class="circle special special-o">
                <i class="fa fa-truck track-fa-truck fa-2x text-white"></i>
                <div class="circle special specia-o specia-s">
                  <i class="fa fa-shopping-bag track-fa-shopping-bag fa-2x text-white text-center"></i>
                </div>
              </div>
            </div>
            <div class="description">
              <div class="title">
                <p class="m-0 mt-4 mr-5 title-i special-title-o text-center">
                  Order placed
                  <span class="d-block">07 March 2018</span>
                </p>
                <p class="m-0 mt-4 mr-5 title-ii special-title-o text-center">
                  Order Confirmed
                  <span class="d-block">08 March 2018</span>
                </p>
                <p class="m-0 mt-4 mr-5 title-iii special-title-o text-center">
                  Picked by the courier
                  <span class="d-block">12 March 2018</span>
                </p>
                <p class="m-0 mt-4 mr-5 title-iiii special-title-o text-center">
                  On its way to you!
                  <span class="d-block">13 March 2018</span>
                </p>
                <p class="m-0 mt-4 mr-5 title-iiiii special-title-o text-center">
                  Arriving: 13 March 2018
                  <span class="d-block">13 March 2018</span>
                  <span></span>
                </p>
              </div>
            </div>
          </div>

          <div class="description">
            <div class="container"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderTracking;
