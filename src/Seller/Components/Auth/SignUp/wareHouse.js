import "./signUp.css";

import React, { Component } from "react";

import Input from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class WareHouse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="bg-signup"></div>
        <div class="container-fluid signup-container">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-white">Warehouse address of vendor</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-5">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                  <div class="row">
                    <Input placeholder="Country" />
                  </div>
                </div>
                <div class="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-2"></div>
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 signup-warehouse-input-margin">
                  <div class="row">
                    <Input placeholder="State" />
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <Input placeholder="City" />
              </div>
              <div class="row mt-3">
                <Input placeholder="Address" />
              </div>
              <div class="row mt-3">
                <Input placeholder="Area" />
              </div>
              <div class="row mt-3">
                <Input placeholder="Location" />
              </div>
              <div class="row mt-3">
                <div class="signup-checkbox-upper-label">Business Address</div>
              </div>
              <div class="row">
                <div class="form-check">
                  <label class="form-check-label" for="check1">
                    <input
                      type="checkbox"
                      class="form-check-input signup-checkbox-input"
                      id="check1"
                      name="option1"
                      value="something"
                    />
                    <div class="signup-checkbox-label-text">Same as Above</div>
                  </label>
                </div>
              </div>
              <div class="row mt-3">
                <div class="signup-checkbox-upper-label">Return Address</div>
              </div>
              <div class="row">
                <div class="form-check">
                  <label class="form-check-label" for="check1">
                    <input
                      type="checkbox"
                      class="form-check-input signup-checkbox-input"
                      id="check1"
                      name="option1"
                      value="something"
                    />
                    <div class="signup-checkbox-label-text">Same as Above</div>
                  </label>
                </div>
              </div>
              <div class="row mt-3 pb-5">
                <Button onClick={this.props.stepNext} text="Next" />
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WareHouse;
