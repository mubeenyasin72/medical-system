import "./signup.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../BasicComponents/FormGroup/Inputs/User/BasicInput/basicInput";
import Button from "../../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";
import {addUserFunction} from '../../../Actions/actions';
import {connect} from 'react-redux';


import SignupClass from '../../../BusinessLogistics/signupUserClass';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class Signup extends Component {
  
  
   state = {
     loading:false,
      fname:null,
      lname:null,
      email:null,
      password:null,
      errors:{
        fname:'',
        lname:'',
        email:'',
        password:''
      }
   }
  
  
 
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const errors = this.state.errors;
  
    switch (name) {
      case 'fname': 
        errors.fname = 
          value.length < 5
            ? 'First Name must be 5 characters long!'
            : '';
        break;
        case 'lname': 
        errors.lname = 
          value.length < 5
            ? 'Last Name must be 5 characters long!'
            : '';
        break;
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
            <div class="col-2"></div>
            <div class="col-8 text-center">
              <h3 class="text-dark">
                Create an account and discover the benefits
              </h3>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <div class="w-75 mx-auto">
                <p class="text-dark text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="First Name" name='fname' onChange={
                    this.handleChange
                  } value={this.state.fname} />
                  {
                    errors.fname.length > 0 &&
                  <span className="error"style={{fontSize: "11px",color:"red"}}>{errors.fname}</span>
                  }
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Last Name" name='lname' onChange={
                   this.handleChange
                  }value={this.state.lname}  />
                   {
                    errors.lname.length > 0 &&
                  <span className="error" style={{fontSize: "11px",color:"red"}}>{errors.lname}</span>
                  }
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Email" name='email' type="email" onChange={
                   this.handleChange
                  } value={this.state.email} />
                   {
                    errors.email.length > 0 &&
                  <span className="error" style={{fontSize: "11px",color:"red"}}>{errors.email}</span>
                  }
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <Input placeholder="Password" name='password' type="password" onChange={
                    this.handleChange   
                  } value={this.state.password} />
                  {
                    errors.password.length > 0 &&
                  <span className="error" style={{fontSize: "11px",color:"red"}}>{errors.password}</span>
                  }
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <div class="form-check">
                    <label class="form-check-label" for="check1">
                      <input
                        type="checkbox"
                        class="form-check-input signup-checkbox-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <div class="signup-checkbox-label-text">
                        I agree with the terms and policy
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
                <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-xl-10 text-center">
                {
                console.log(this.props.signup_Message,"Api Responce Of Signup Data"),
                this.props.signupMessage === "User Added Successfully" ? (
                  <span style={{ fontSize: "11px", color: "#00ff00" }}>
                    {this.props.signupMessage}
                  </span>
                ) : (
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.props.signupMessage}
                  </span>
                )
                 
                }
                    <Button onClick={ ()=>{    
                      if (!this.state.loading) {
                        this.setState(
                          {
                            loading: true
                          },
                          () => {
                            this.timer = setTimeout(() => {}, this.state.loading === false);
                            this.props.addUserFunction(
                              new SignupClass(
                                this.state.fname,
                                this.state.lname,
                                this.state.email,
                                this.state.password
                              ),this
                              );
                                    {
                                        
                            // if(this.props.signupSuccess === true){
                            //   this.setState({
                            //     fname:"",
                            //     lname:"",
                            //     email:"",
                            //     password:""
                            //   });       
                            // }
                            
                            }     
                               
                          }
                        );
                      };
                         }
                         
                         
                     }
                      class="btn btn-block"
                      disabled={this.state.loading}
                    >
                      SignUp
                      {
                        this.props.signupSuccess === true?
                        "":
                        this.state.loading && (
                          <i class="spinner-border text-dark spinner-border-sm" role="status" />
                      )
                      }
                      
                  {!this.state.loading && <span></span>}
                  
                    </Button>
                </div>
                <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
              </div>
              <div class="row mt-3">
                <div class="col-12 text-center"></div>
              </div>
              <div class="row mt-3 pb-5">
                <div class="col-12 signup-member-text">
                  Are you already a member?&nbsp;&nbsp;
                  <Link to="/User/Login">
                    <b>SignIn</b>
                  </Link>
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
const mapStateToProps = state =>({
  signupMessage:state.MainReducer.singupMsg,
  signupSuccess:state.MainReducer.signUpSuc
})
export default connect(mapStateToProps,{addUserFunction}) (Signup);
