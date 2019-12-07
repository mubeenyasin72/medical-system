import "./googleLoginButton.css";

import React, { Component } from "react";

class GoogleLoginButton extends Component {
  state = {};
  render() {
    return (
      <button
        class="btn form-btn-google-login"
        style={{ width: this.props.width ? this.props.width : "100%" }}
      >
        <img
          class="form-btn-google-login-icon"
          src={require("../../../Assets/BasicComponentIcons/gmail.svg")}
          alt="fb"
        />
        Gmail
      </button>
    );
  }
}

export default GoogleLoginButton;
