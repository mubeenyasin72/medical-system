import "./signUp.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import Chose from "../../../../BasicComponents/FormGroup/Inputs/ChoseFile/choseFile";
import PrimaryButton from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class BankInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="bg-signup"></div>
        <div class="container-fluid signup-container">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-white">Bank Information</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-5">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-5">
                  <div class="row">
                    <Input placeholder="Account Title" />
                  </div>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                  <div class="row">
                    <Input placeholder="Bank Name" />
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <Input placeholder="Account Number" />
              </div>
              <div class="row mt-3">
                <Input placeholder="Branch Code" />
              </div>
              <div class="row mt-3">
                <Chose placeholder="Upload Cheque Copy" type="file" />
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 text-center">
                  <div class="mb-5">
                    <Link to="/Seller/Statistics">
                      <PrimaryButton text="Signup" />
                    </Link>
                  </div>
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

export default BankInfo;
