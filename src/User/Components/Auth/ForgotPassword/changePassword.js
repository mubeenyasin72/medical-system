import "./forgotPassword.css";

import React, { Component } from "react";
import {changePasswordActions} from '../../../Actions/actions';

import Input from "../../../../BasicComponents/FormGroup/Inputs/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";
import { connect } from "react-redux";
import ChangePasswordClass from '../../../BusinessLogistics/changePassword';

class ChangePassword extends Component {
  state = {
    _NewPassowrd:null,
    _ConfirmPassword:null,
    loading:false,
    errors:{
      _NewPassowrd:'',
      _ConfirmPassword:''
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "_NewPassowrd":
        errors._NewPassowrd =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        State._NewPassowrd = value;
        break;
      case "_ConfirmPassword":
        errors._ConfirmPassword =
          State._NewPassowrd !== value ? "Passwords are not matched!" : "";
        State._ConfirmPassword = value;
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
                  Enter new Password and recover your account
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
                    placeholder="New Password" name='_NewPassowrd' type="password" class="placerholder-style"
                    onChange={
                      this.handleChange
                    }
                  />
                   {
                    errors._NewPassowrd &&
                  <span className="error"style={{fontSize: "11px",color:"red"}}>{errors._NewPassowrd}</span>
                  }
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-sm-12 col-md-12 col-xl-12 col-xl-12">
                  <Input placeholder="Confirm Password" name='_ConfirmPassword' type="password" class="placerholder-style"
                     onChange={
                      this.handleChange
                    }
                   />
                    {
                    errors._ConfirmPassword &&
                  <span className="error"style={{fontSize: "11px",color:"red"}}>{errors._ConfirmPassword}</span>
                  }
                </div>
              </div>
              <div class="row mt-3 mb-5">
                <div class="col-sm-12 col-md-12 col-xl-12 col-xl-12">
                  {/* <Link to="/Seller/Login"> */}
                    <Button 
                     onClick={
                       ()=>{
                        if (!this.state.loading) {
                          this.setState(
                            {
                              loading: true
                            },
                            () => {
                              this.timer = setTimeout(() => {}, this.state.loading === false);
                             this.props.changePasswordActions(
                               new ChangePasswordClass(
                                 this.props.getEmail,
                                 this.state._ConfirmPassword
                               ),this
                             )
                            }
                          );
                        }
                       }
                     }
                      
                    >
                         {this.state.loading && (
                    <i class="spinner-border text-dark spinner-border-sm" role="status" />
                  )}
                          
                    {this.state.loading && <span>Wait</span>}
                    {!this.state.loading && <span>Reset Password</span>}
                    </Button>
                  {/* </Link> */}
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
export default connect(mapStateToProps,{changePasswordActions}) (ChangePassword);
