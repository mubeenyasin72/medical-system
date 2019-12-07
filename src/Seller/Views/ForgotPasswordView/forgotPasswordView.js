import "./forgotPasswordView.css";

import React, { Component } from "react";


import ForgotPassword from "../../../Seller/Components/Auth/ForgotPassword/forgotPassword";

class ForgotPasswordView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid forgot-password-view-container">
          <div class="row forgot-password-view-adjust">
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
            <div class="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
              <ForgotPassword />
            </div>
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPasswordView;
