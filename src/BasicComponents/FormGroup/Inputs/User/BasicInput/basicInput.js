import "./basicInput.css";

import React, { Component } from "react";

class BasicInput extends Component {
  state = {};
  render() {
    return (
      <input
        class="form-control user-form-input"
        name={this.props.name?this.props.name:""}
        value={this.props.value}
        placeholder={this.props.placeholder ? this.props.placeholder : "Input"}
        style={{ width: this.props.width ? this.props.width : "100%" }}
        type={this.props.type ? this.props.type : "text"}
        onChange={this.props.onChange? this.props.onChange : ()=> false}
      />
    );
  }
}

export default BasicInput;
