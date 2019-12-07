import "./signupView.css";

import React, { Component } from "react";

import BankInfo from "../../Components/Auth/SignUp/bankInfo";
import SalerInfo from "../../Components/Auth/SignUp/salerInfo";
import WareHouse from "../../Components/Auth/SignUp/wareHouse";

class SignupView extends Component {
  state = {
    step: 1
  };

  stepNext = () => {
    console.log("Next Step");
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    console.log(this.state.step);
    return (
      <React.Fragment>
        <div class="container-fluid signup-view-container">
          <div class="row signup-view-adjust mb-5">
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
            <div class="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4">
              {this.state.step === 1 ? (
                <SalerInfo stepNext={this.stepNext} />
              ) : this.state.step === 2 ? (
                <WareHouse stepNext={this.stepNext} />
              ) : this.state.step === 3 ? (
                <BankInfo />
              ) : (
                ""
              )}
            </div>
            <div class="col-0 col-sm-2 col-md-2 col-lg-3 col-xl-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignupView;
