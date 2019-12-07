import "./basicInput.css";

import React, { Component } from "react";

class BasicInput extends Component {
  state = {};
  render() {
    return (
      <input
        class="form-control user-form-input"
        placeholder={this.props.placeholder ? this.props.placeholder : "Input"}
        style={{ width: this.props.width ? this.props.width : "100%" }}
        type={this.props.type ? this.props.type : "text"}
      />
    );
  }
}

export default BasicInput;
