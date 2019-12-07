import "./signUp.css";

import React, { Component } from "react";

import Input from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class SalerInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="bg-signup"></div>
        <div class="container-fluid signup-container">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-white">
                Create an account and discover the benefits
              </h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-75 mx-auto">
                <p class="text-white text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Shop Name" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Phone Number" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Verification" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Email" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Password" type="password" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Confirm Password" type="password" />
                </div>
              </div>
              <div class="row mt-3 pb-5">
                <div class="col-12 text-center">
                  <Button onClick={this.props.stepNext} text="Next" />
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

export default SalerInfo;
