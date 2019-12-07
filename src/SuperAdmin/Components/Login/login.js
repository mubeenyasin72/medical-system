import "./login.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import InputField from "../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import FBLoginButton from "../../../BasicComponents/FormGroup/Buttons/FBLoginButton/fbLoginButton";
import GoogleLoginButton from "../../../BasicComponents/FormGroup/Buttons/GoogleLoginButton/googleLoginButton";
import SignInButton from "../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";
import PrimaryButton from "../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="bg"></div>
        <div class="container-fluid login-container">
          <div class="row pt-5">
            <div class="col-12 text-center">
              <h3 class="text-white ">Log in</h3>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="login-description-text mx-auto">
                <p class="text-white text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <InputField placeholder="E-mail" type="email" />
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <InputField placeholder="Password" type="password" />
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <label class="form-check-label" for="check1">
                      <input
                        type="checkbox"
                        class="form-check-input login-checkbox-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <div class="login-checkbox-label-text">
                        Keep me signed in
                      </div>
                    </label>
                  </div>
                </div>
                {/* <div class="col-6">
                  <div class="text-right">
                    <Link class="login-forgot-text text-white" to="">
                      Forgot password?
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          {/* <div class="row mt-4">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
              <FBLoginButton />
            </div>
            <div class="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
              <GoogleLoginButton />
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div> */}
          <div class="row mt-3 pb-5">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
              <Link to="/SuperAdmin/Dashboard">
                <PrimaryButton text="Login" />
              </Link>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
