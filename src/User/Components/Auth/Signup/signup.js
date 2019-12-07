import "./signup.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class Signup extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-dark">
                Create an account and discover the benefits
              </h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-75 mx-auto">
                <p class="text-dark text-center">
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
                  <Input placeholder="First Name" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Email" type="email" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Password" type="password" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <div class="form-check">
                    <label class="form-check-label" for="check1">
                      <input
                        type="checkbox"
                        class="form-check-input signup-checkbox-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <div class="signup-checkbox-label-text">
                        I agree to the Terms of Service and Privacy Policy
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
                <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
                  <Link to="/User/Profile">
                    <Button text="Sign up" />
                  </Link>
                </div>
                <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
              </div>
              <div class="row mt-3">
                <div class="col-12 text-center"></div>
              </div>
              <div class="row mt-3 pb-5">
                <div class="col-1 col-sm-2 col-md-2 col-lg-3 col-xl-2"></div>
                <div class="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-8 signup-member-text">
                  Are you already a member?&nbsp;&nbsp;
                  <Link to="/User/Login">
                    <b>SignIn</b>
                  </Link>
                </div>
                <div class="col-1 col-sm-2 col-md-2 col-lg-3 col-xl-2"></div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
