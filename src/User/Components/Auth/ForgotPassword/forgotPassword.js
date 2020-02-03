import "./forgotPassword.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";
import {userSendEmailAction,getEmailAction} from '../../../Actions/actions';
import {connect} from 'react-redux';





const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class ForgotPassword extends Component {
  state = {
    email:null,
    loading:false,
    errors:{
      email:''
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const errors = this.state.errors;
  
    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        
    })
  }
  render() {
    const {errors} = this.state;
    return (
      <React.Fragment>
        {/* <div class="bg-forgot-password"></div> */}
        <div class="container-fluid">
          <div class="row pt-5">
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-dark">Forgot your password?</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-50 mx-auto">
                <p class="text-dark text-center">
                  Enter your email or phone number and recover your account
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mt-3">
                <Input placeholder="Email" name='email' type="email" onChange={
                   this.handleChange
                  } value={this.state.email} />
                   {
                    errors.email.length > 0 &&
                  <span className="error" style={{fontSize: "11px",color:"red"}}>{errors.email}</span>
                  }
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12 text-center">
                  <div class="mb-5">
                    {/* <Link to="/User/Login"> */}
                      <Button text="Reset password"
                        onClick={
                          ()=>{
                            if (!this.state.loading){
                              this.setState(
                                {
                                  loading: true
                                },
                                ()=>{
                                  this.timer = setTimeout(() => {}, this.state.loading === false);
                                  this.props.userSendEmailAction(
                                    this.state.email,
                                    this
                                  );
                                  this.props.getEmailAction(
                                    this.state.email
                                  )
                                }
                              )
                            }
                          }
                        }
                      >
                     
                      </Button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div class="row mt-3 pb-5"></div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
 }


export default connect(null,{userSendEmailAction}) (ForgotPassword);
