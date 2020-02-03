import "./login.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import InputField from "../../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import FBLoginButton from "../../../../BasicComponents/FormGroup/Buttons/FBLoginButton/fbLoginButton";
import GoogleLoginButton from "../../../../BasicComponents/FormGroup/Buttons/GoogleLoginButton/googleLoginButton";
import PrimaryButton from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";
import {connect} from 'react-redux';
import {loginUserFunction} from '../../../Actions/actions';
import LoginClass from '../../../BusinessLogistics/loginClass';






const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Login extends Component {
  state = {
    loading:false,
    email:null,
    password:null,
    errors:{
      email:"",
      password:""
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
        case 'password': 
        errors.password = 
        value.length < 8
        ? 'Password must be 8 characters long!'
        : '';
        
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
        <div class="container-fluid">
          <div class="row pt-5">
            <div class="col-12 text-center">
              <h3 class="text-dark ">Log in</h3>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="login-description-text mx-auto">
                <p class="text-dark text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
            <InputField placeholder="Email" name='email' type="email" onChange={
                   this.handleChange
                  } value={this.state.email} />
                
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <InputField placeholder="Password" type="password" onChange={this.handleChange} name='password'
              value={this.state.password}/>
              
          </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10">
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <label
                      class="form-check-label"
                      for="check1"
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="checkbox"
                        class="form-check-input login-checkbox-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <div
                        class=""
                        style={{
                          marginLeft: "20px",
                          color: "#3A3240",
                          fontSize: "15px",
                          fontStyle: "bold"
                        }}
                      >
                        Keep me signed in
                      </div>
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-right">
                    <Link
                      class="login-forgot-text text-dark"
                      to="/User/Forget_Password"
                      //   href="#"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-4">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
              <FBLoginButton />
            </div>
            <div class="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
              <GoogleLoginButton />
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
           {
            
            console.log(this.props.loginfail12345,"Api Responce Of Login Data Data"),
                this.props.loginfail12345 ? (
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.props.loginfail12345}
                  </span>
                ) : ""
               
                 
                }
                <PrimaryButton
                  onClick = {()=>
                    {
                      if (!this.state.loading) {
                        this.setState(
                          {
                            loading: true
                          },
                          () => {
                            this.timer = setTimeout(() => {}, this.state.loading === false);
                            this.props.loginUserFunction(
                              new LoginClass(
                                this.state.email,
                                this.state.password
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
                          
                    {this.state.loading && <span>Logging In</span>}
                    {!this.state.loading && <span>Login</span>}
                </PrimaryButton>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
          <div class="row mt-3 pb-5">
            <div class="col-2"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-6 text-right">Not a member yet?</div>
                <Link
                  class="col-6 text-left login-member-signup"
                  to="/User/Signup"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state=>({
  loginfail12345:state.MainReducer.loginfail,

})
export default connect(mapStateToProps,{loginUserFunction}) (Login);
