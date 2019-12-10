import "./cart.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import Button from "../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class DeliveryAddress extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          class="container-fluid"
          style={{ width: "100%", minWidth: "1200px" }}
        >
          {/* Title and Step Icons */}
          <div class="row">
            <div class="col-3">
              <div class="cart-heading">Address data and type of delivery</div>
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <div class="row">
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-done">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/cart-orange.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-current">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/van-white.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-next">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/receipt-grey.svg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Data Inputs */}
          <div class="row mt-4">
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">First Name</label>
                    <Input placeholder="First Name" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">Last Name</label>
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">Address</label>
                    <Input placeholder="Address" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">City</label>
                    <Input placeholder="City" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">Postal Code</label>
                    <Input placeholder="Postal code" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">
                      Phone Number
                    </label>
                    <Input placeholder="Phone number" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">Country</label>
                    <Input placeholder="Country" />
                  </div>
                </div>
                <div class="col-6 mt-2">
                  <div class="form-group">
                    <label class="cart-delivery-input-label">Email</label>
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5"></div>
          </div>
          {/* Bottom Actions */}
          <div class="row mt-5">
            <div class="col-2">
              <Link to="/User/Shopping_Cart">
                <button class="btn cart-delivery-back-btn">
                  <img
                    alt="back"
                    class="cart-delivery-back-icon"
                    src={require("../../../Assets/Icons/UserShoppingCart/back.svg")}
                  />
                  Back
                </button>
              </Link>
            </div>
            <div class="col-6"></div>
            <div class="col-4">
              <div class="row">
                <div class="col-8 text-center">
                  <Link to="/">
                    <Button
                      text="CONTINUE SHOPPING"
                      bgColor="#ffffff"
                      border="1px solid #D8D8D8"
                      width="70%"
                    />
                  </Link>
                </div>
                <div class="col-4 text-center">
                  <Link to="/User/Order_Summary">
                    <Button text="NEXT STEP" border="1px solid #D8D8D8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeliveryAddress;
