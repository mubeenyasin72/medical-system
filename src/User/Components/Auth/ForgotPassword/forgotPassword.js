import "./forgotPassword.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <div class="bg-forgot-password"></div> */}
        <div class="container-fluid">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-dark">Forgot your password?</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-50 mx-auto">
                <p class="text-dark text-center">
                  Enter your email or phone number and recover your account
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mt-3">
                <Input placeholder="Email" />
              </div>
              <div class="row mt-3">
                <div class="col-5">
                  <div class="row">
                    <hr class="hr" />
                  </div>
                </div>
                <div class="col-2">
                  <div class="row">
                    <h6 class="text-dark mx-auto">OR</h6>
                  </div>
                </div>
                <div class="col-5">
                  <div class="row">
                    <hr class="hr" />
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <Input placeholder="Phone number" />
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 text-center">
                  <div class="mb-5">
                    <Link to="/User/Login">
                      <Button text="Reset password" />
                    </Link>
                  </div>
                </div>
              </div>
              <div class="row mt-3 pb-5"></div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
