import "./forgotPassword.css";

import React, { Component } from "react";
import SendCodeClass from '../../../BusinessLogistics/sendCode';
import { connect } from "react-redux";
import {userSendCodeAction,getEmailAction} from '../../../Actions/actions';
import Input from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class SendCode extends Component {
  state = {
    code:null,
    loading:false,
    errors:{
      code:''
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "code":
        errors.code =
          value.length >= 7 ? "Code must be 6 characters long!" : "";
        State.code = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };

  render() {
    const {errors} = this.state;
    return (
      <React.Fragment>
        <div class="container-fluid ">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-dark">Forgot password?</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-50 mx-auto">
                <p class="text-dark text-center">
                  Enter code sent on your Email and recover your account
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mt-3">
                <div class="col-sm-12 col-md-12 col-xl-12 col-xl-12">
                  <Input 
                    placeholder="Enter Code" name='code' class="placerholder-style"
                    onChange={
                      this.handleChange
                    }
                  />
                    {
                    errors.code &&
                  <span className="error"style={{fontSize: "11px",color:"red"}}>{errors.code}</span>
                  }
                </div>
              </div>
              <div class="row mt-3 mb-5">
                <div class="col-sm-12 col-md-12 col-xl-12 col-xl-12">
                    <Button
                      onClick={
                        ()=>
                        {
                          if (!this.state.loading) {
                            this.setState(
                              {
                                loading: true
                              },
                              () => {
                                this.timer = setTimeout(() => {}, this.state.loading === false);
                                this.props.userSendCodeAction(
                                 new SendCodeClass(
                                   this.props.getEmail,
                                   this.state.code
                                  ),
                                  this
                                  );
                              }
                            );
                          }
    
                       }
                      }
                    >
                        {this.state.loading && (
                    <i class="spinner-border text-dark spinner-border-sm" role="status" />
                  )}
                          
                    {this.state.loading && <span>Sending Your Code</span>}
                    {!this.state.loading && <span>Send Code</span>}
                      </Button>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state=>({
  getEmail:state.MainReducer.getEmail
})

export default connect(mapStateToProps,{userSendCodeAction,getEmailAction}) (SendCode);
