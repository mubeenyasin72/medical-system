import "./basicInput.css";

import React, { Component } from "react";

class BasicInput extends Component {
  state = {};
  render() {
    return (
      <input
        class={
          this.props.class? this.props.class+" form-control form-input " :" form-control form-input "
        }
        
        placeholder={this.props.placeholder ? this.props.placeholder : "Input"}
        style={{ width: this.props.width ? this.props.width : "100%" }}
        type={this.props.type ? this.props.type : "text"}
        onChange={this.props.onChange? this.props.onChange:()=> false}
        name={this.props.name?this.props.name:""}
      />
    );
  }
}

export default BasicInput;
