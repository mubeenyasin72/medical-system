import "./loginView.css";

import React, { Component } from "react";
import Login from "../../Components/Login/login";

class LoginView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <div class="login-view-container"></div> */}
        <div class="container-fluid login-view-container">
          <div class="row login-view-adjust">
            <div class="col-0 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4">
              <Login />
            </div>
            <div class="col-0 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginView;
