import "./primaryButton.css";
import React, { Component } from "react";

class PrimaryButton extends Component {
  state = {};
  render() {
    return (
      <button
        class="btn form-btn-primary w-100"
        onClick={this.props.onClick ? this.props.onClick : () => false}
        style={{ width: this.props.width ? this.props.width : "100%" }}
      >
        {this.props.children ? this.props.children : "Button"}
      </button>
    );
  }
}

export default PrimaryButton;
