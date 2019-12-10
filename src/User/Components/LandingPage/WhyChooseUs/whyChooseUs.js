import React, { Component } from "react";
// import Login from "./login";
class ChooseUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center" }}>Why should you choose us?</h3>
        <div style={{ marginTop: "50px" }}>
          <div className="row">
            <div
              style={{ textAlign: "center" }}
              className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 div-class"
            >
              <div>
                <i style={news.logos} class="fa fa-truck"></i>
                <p style={news.title}>Free Shipping</p>
                <p style={news.textdesgn}>
                  All purchases over $99 are eligible for free shipping via USPS
                  First Class Mail
                </p>
              </div>
            </div>

            <div
              style={{ textAlign: "center" }}
              className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 div-class"
            >
              <div>
                <i style={news.logos} class="fa fa-truck"></i>
                <p style={news.title}>Easy Payments</p>
                <p style={news.textdesgn}>
                  All payments are proceed instantly over a secure payment
                  protocol
                </p>
              </div>
            </div>

            <div
              style={{ textAlign: "center" }}
              className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 div-class"
            >
              <div>
                <i style={news.logos} class="fa fa-truck"></i>
                <p style={news.title}>Money-Back Guarantee</p>
                <p style={news.textdesgn}>
                  If an item arrived damaged or you've changed your mind,you can
                  send it back for a fault refund.
                </p>
              </div>
            </div>

            <div
              style={{ textAlign: "center" }}
              className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 div-class"
            >
              <div>
                <i style={news.logos} class="fa fa-truck"></i>
                <p style={news.title}>Finest quality</p>
                <p style={news.textdesgn}>
                  Design to last,each of our products has been crafted with the
                  finest materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseUs;

const news = {
  title: {
    fontWeight: "bold",
    marginTop: "35px",
    fontSize: "16px"
  },
  logos: {
    backgroundColor: "#FFF2DF",
    padding: "20px",
    color: "#F2B856",
    borderRadius: "10px",
    fontSize: "30px"
  },
  textdesgn: {
    fontSize: "14px",
    color: "#969696"
  }
};
