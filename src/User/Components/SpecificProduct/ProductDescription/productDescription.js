import React, { Component } from "react";
import men from "../../../../Assets/Images/men.jpg";
import User from "../../../../Assets/Images/user.png";
import Degree from "../../../../Assets/Images/degrees.png";
import hotiron from "../../../../Assets/Images/hot-iron.png";
import nodry from "../../../../Assets/Images/no-dry.png";
class description extends Component {
  state = {
    toggle: true
  };

  togle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.toggle === true ? (
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <span style={style.descrip}>DESCRIPTION</span>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <p style={style.review} onClick={() => this.togle()}>
                  REVIEWS (2)
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "80px" }}
            >
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                {/* <i style={style.filelogo} class="fa fa-file-alt"></i> */}
                <img
                  style={style.filelogo}
                  src={require("../../../../Assets/Images/file.svg")}
                />
                <i class="fa fa-file-invoice"></i>
                <p style={style.filedescrip}>Details and product Description</p>
                <p>
                  white summer vibes T-shirt in the uikit line with a colorful
                  print.
                </p>
                <p style={style.fieldtext}>
                  Made of jursey cotton.T-shirt fit perfectly with jeans,pants
                  and shotrs
                </p>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <img
                  style={style.filelogo}
                  src={require("../../../../Assets/Images/cubes.svg")}
                />
                {/* <i  class="fa fa-pencil-ruler"></i> */}
                <p style={style.filedescrip}>Material(s) and care</p>
                <p>Body:98% COTTON 2% ELASTANE </p>
                <p style={{ marginTop: "-5px" }}>
                  <img src={Degree} width="18px" height="16px" />
                  {/* <i style={style.fieldlogos} class="fa fa-mountain"></i> */}
                  <img
                    style={style.fieldlogos}
                    src={nodry}
                    width="18px"
                    height="16px"
                  />
                  <img
                    style={style.fieldlogos}
                    src={hotiron}
                    width="18px"
                    height="16px"
                  />
                  {/* <i style={style.fieldlogos} class="fa fa-circle"></i> */}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <p style={style.descrip2} onClick={() => this.togle()}>
                  DESCRIPTION
                </p>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                style={{ marginTop: "10px" }}
              >
                <span style={style.review2}>REVIEWS (2)</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div style={{ float: "left" }}>
                  <p
                    style={{
                      fontSize: "80px",
                      fontWeight: "bold",
                      marginLeft: "10px",
                      marginTop: "30px"
                    }}
                  >
                    4.5
                  </p>
                  <p style={{ marginTop: "-25px" }}>
                    <i style={style.fieldstar} class="fa fa-star"></i>
                    <i style={style.fieldstar2} class="fa fa-star"></i>
                    <i style={style.fieldstar2} class="fa fa-star"></i>
                    <i style={style.fieldstar2} class="fa fa-star"></i>
                    <i
                      style={style.fieldstar2}
                      class="fas fa-star-half-alt"
                    ></i>
                    <br />
                    <i
                      style={{ color: "#DDDDDD", marginTop: "15px" }}
                      class="fa fa-user"
                    >
                      {" "}
                      81 all opinions
                    </i>
                  </p>
                </div>
                <div style={{ marginTop: "65px", marginLeft: "190px" }}>
                  <i style={style.fieldstar} class="fa fa-star">
                    {" "}
                    <span style={{ color: "black" }}>1</span>
                    <div className="progress" style={style.fieldprogress}>
                      <div className="progress-bar"></div>
                    </div>
                  </i>
                  <br />
                  <i style={style.fieldstar} class="fa fa-star">
                    {" "}
                    <span style={{ color: "black" }}>2</span>
                    <div className="progress" style={style.fieldprogress}>
                      <div className="progress-bar"></div>
                    </div>
                  </i>
                  <br />
                  <i style={style.fieldstar} class="fa fa-star">
                    {" "}
                    <span style={{ color: "black" }}>3</span>
                    <div className="progress" style={style.fieldprogress}>
                      <div
                        className="progress-bar"
                        style={{ width: "10%", backgroundColor: "#FBB03B" }}
                      ></div>
                    </div>
                  </i>
                  <br />
                  <i style={style.fieldstar} class="fa fa-star">
                    {" "}
                    <span style={{ color: "black" }}>4</span>
                    <div className="progress" style={style.fieldprogress}>
                      <div
                        className="progress-bar"
                        style={{ width: "20%", backgroundColor: "#FBB03B" }}
                      ></div>
                    </div>
                  </i>
                  <br />
                  <i style={style.fieldstar} class="fa fa-star">
                    {" "}
                    <span style={{ color: "black" }}>5</span>
                    <div className="progress" style={style.fieldprogress}>
                      <div
                        className="progress-bar"
                        style={{ width: "80%", backgroundColor: "#FBB03B" }}
                      ></div>
                    </div>
                  </i>
                  <br />
                </div>
                <button style={style.fieldreviewbutton}>Add opinion</button>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                style={{ marginTop: "35px" }}
              >
                <img
                  src={men}
                  style={style.imgreview}
                  width="40px"
                  height="40px"
                />
                <p style={{ marginLeft: "60px", fontWeight: "bold" }}>
                  John Doe
                </p>
                <p style={{ marginTop: "-22px", marginLeft: "55px" }}>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star-half-alt"></i>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginLeft: "60px",
                    marginTop: "-15px"
                  }}
                >
                  lorem is simply dummy text of the printing and typesting
                  industry Loream ipsum has been the industry's standard dummy
                  text ever since the 1500s{" "}
                </p>

                <img
                  src={User}
                  style={style.imgreview}
                  width="40px"
                  height="40px"
                />
                <p style={{ marginLeft: "60px", fontWeight: "bold" }}>
                  Eveline Gosok
                </p>
                <p style={{ marginTop: "-22px", marginLeft: "55px" }}>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star-half-alt"></i>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginLeft: "60px",
                    marginTop: "-15px"
                  }}
                >
                  lorem is simply dummy text of the printing and typesting
                  industry Loream ipsum has been the industry's standard dummy
                  text ever since the 1500s{" "}
                </p>

                <img
                  src={men}
                  style={style.imgreview}
                  width="40px"
                  height="40px"
                />
                <p style={{ marginLeft: "60px", fontWeight: "bold" }}>
                  John Doe
                </p>
                <p style={{ marginTop: "-22px", marginLeft: "55px" }}>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star"></i>
                  <i style={style.reveiwstar} class="fa fa-star-half-alt"></i>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginLeft: "60px",
                    marginTop: "-15px"
                  }}
                >
                  lorem is simply dummy text of the printing and typesting
                  industry Loream ipsum has been the industry's standard dummy
                  text ever since the 1500s{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default description;

const style = {
  descrip: {
    border: "1px solid #EEC07B",
    borderRadius: "30px",
    fontWeight: "bold",
    padding: "10px 35px 10px 35px",
    float: "right",
    cursor: "pointer"
  },
  review: {
    color: "#DDDDDD",
    marginTop: "10px",
    marginLeft: "35px",
    cursor: "pointer"
  },
  descrip2: {
    float: "right",
    color: "#DDDDDD",
    marginTop: "10px",
    cursor: "pointer"
  },
  review2: {
    border: "1px solid #EEC07B",
    borderRadius: "30px",
    fontWeight: "bold",
    padding: "10px 35px 10px 35px",
    cursor: "pointer"
  },
  filelogo: {
    textAlign: "right",
    width: "60px"
  },
  filedescrip: {
    fontWeight: "bold",
    marginTop: "60px"
  },
  fieldtext: {
    marginTop: "-15px",
    marginLeft: "37px"
  },
  fieldlogos: {
    marginLeft: "10px"
  },
  fieldprogress: {
    width: "200px",
    height: "3px",
    float: "right",
    marginTop: "8px",
    marginLeft: "25px"
  },
  fieldstar: {
    color: "#FBB03B"
  },
  fieldstar2: {
    color: "#FBB03B",
    marginLeft: "10px"
  },
  fieldreviewbutton: {
    border: "none",
    backgroundColor: "#FBB03B",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: "30px",
    padding: "10px 35px 10px 35px",
    marginTop: "40px"
  },
  imgreview: {
    borderRadius: "300px",
    float: "left",
    marginTop: "10px"
  },
  reveiwstar: {
    color: "#FBB03B",
    marginLeft: "6px",
    fontSize: "10px"
  }
};
