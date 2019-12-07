import "./fbLoginButton.css";

import React, { Component } from "react";

class FBLoginButton extends Component {
  state = {};
  render() {
    return (
      <button
        class="btn form-btn-fb-login"
        style={{ width: this.props.width ? this.props.width : "100%" }}
      >
        <img
          class="form-btn-fb-login-icon"
          src={require("../../../Assets/BasicComponentIcons/fb.svg")}
          alt="fb"
        />
        Facebook
      </button>
    );
  }
}

export default FBLoginButton;
