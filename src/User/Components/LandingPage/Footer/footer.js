import React, { Component } from "react";
import Logo from "../../../../Assets/Images/Apple.png";
import googlelogo from "../../../../Assets/Images/google.png";
import "./footer.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid" style={{ padding: "0px 20px 0px 20px" }}>
          <div class="w-100">
            <hr />
            <div style={{ padding: "0% 3% 0% 3%" }}>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <b>
                    <p style={style.heading}>Help</p>
                  </b>
                  <br />
                  <p style={style.size}>Order status</p>
                  <p style={style.size}>Shipping and delivery</p>
                  <p style={style.size}>Returns</p>
                  <p style={style.size}>Payment option</p>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <b>
                    <p style={style.heading}>Information</p>
                  </b>
                  <br />
                  <p style={style.size}>Gift card</p>
                  <p style={style.size}>Find a store</p>
                  <p style={style.size}>Become a member</p>
                  <p style={style.size}>Site feedback</p>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <b>
                    <p style={style.heading}>UI Kit Inside</p>
                  </b>
                  <br />
                  <p style={style.size}>Company over view</p>
                  <p style={style.size}>Made in USA</p>
                  <p style={style.size}>Careers</p>
                  <p style={style.size}>Idea Submition</p>
                  <p style={style.size}>Student discount</p>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <b>
                    <p style={style.heading}>NEWSLETTER</p>
                  </b>
                  <br />
                  <p style={style.size}>To our newsletter</p>
                  <input
                    class="w-100"
                    style={style.inputfield}
                    type="text"
                    placeholder=" Enter Your Email"
                  />
                  <br />
                  <button class="w-100" style={style.butn}>
                    SUBSCRIBE
                  </button>
                  <br />
                  <i style={style.marg} class="fa fa-facebook-f"></i>
                  <i style={style.marg} class="fa fa-twitter"></i>
                  <i style={style.marg} class="fa fa-instagram"></i>
                  <i style={style.marg} class="fa fa-youtube"></i>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ padding: "0% 3% 0% 3%" }}>
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                  <p style={style.footers}>CONTACT</p>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                  <p style={style.footers}>PRIVANCY POLICY</p>
                </div>

                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                  <p style={style.footers}>CAREER</p>
                </div>

                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                  <p style={style.footers}>WEB MAP</p>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                  <img src={googlelogo} width="150px" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                  <img src={Logo} width="150px" height="44px" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-4 col-4">
                  <p style={style.intro}>
                    DESIGN BY NIOFOX ALL RIGHTS RESERVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
const style = {
  heading: {
    fontSize: "20px"
  },
  marg: {
    marginLeft: "20px",
    marginTop: "15px",
    fontSize: "23px"
  },
  butn: {
    border: "none",
    borderRadius: "35px",
    backgroundColor: "#FBB03B",
    textAlign: "center",
    padding: "10px 20px 10px 20px",
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "14px",
    outline: "none"
  },
  size: {
    fontSize: "15px",
    marginTop: "-5px"
  },
  footers: {
    fontWeight: "bold",
    fontSize: "14px",
    marginTop: "11px"
  },
  intro: {
    fontSize: "14px",
    color: "#C4C4C4",
    float: "right",
    marginTop: "11px"
  },
  inputfield: {
    borderRadius: "45px",
    fontSize: "14px",
    padding: "10px 55px 10px 15px",
    borderColor: "#C4C4C4",
    border: "1px solid #C4C4C4",
    marginTop: "-10px",
    outline: "none"
  }
};
