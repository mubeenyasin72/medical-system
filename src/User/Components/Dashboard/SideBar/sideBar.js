import "./sideBar.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
class UserSideBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            {/* <div class="col-1"></div> */}
            <div class="col-12">
              {/* Profile */}
              <Link to="/User/Profile">
                <div
                  class="row user-sidebar-row"
                  style={{
                    backgroundColor:
                      this.props.bg === "profile" ? "#FCFCFC" : "#fff",
                    padding: "10px 20px 10px 20px"
                  }}
                >
                  <div class="col-2">
                    <div class="w-100">
                      <img
                        alt="profile"
                        class="user-sidebar-profile"
                        src={require("../../../../Assets/Icons/UserSideBar/profile.svg")}
                      />
                    </div>
                  </div>
                  <div class="col-10 user-sidebar-row-text">Profile Info</div>
                </div>
              </Link>
              {/* Bill */}
              <Link to="/User/Billing_Information">
                <div
                  class="row user-sidebar-row"
                  style={{
                    backgroundColor:
                      this.props.bg === "bill" ? "#FCFCFC" : "#fff",
                    padding: "10px 20px 10px 20px"
                  }}
                >
                  <div class="col-2">
                    <div class="w-100">
                      <img
                        alt="profile"
                        class="user-sidebar-profile"
                        src={require("../../../../Assets/Icons/UserSideBar/money.svg")}
                      />
                    </div>
                  </div>
                  <div class="col-10 user-sidebar-row-text">Billing Info</div>
                </div>
              </Link>
              {/* Bank Or Card */}
              <Link to="/User/Bank_Information">
                <div
                  class="row user-sidebar-row"
                  style={{
                    backgroundColor:
                      this.props.bg === "bank" ? "#FCFCFC" : "#fff",
                    padding: "10px 20px 10px 20px"
                  }}
                >
                  <div class="col-2">
                    <div class="w-100">
                      <img
                        alt="profile"
                        class="user-sidebar-profile"
                        src={require("../../../../Assets/Icons/UserSideBar/dollar.svg")}
                      />
                    </div>
                  </div>
                  <div class="col-10 user-sidebar-row-text">
                    Bank Details OR Card
                  </div>
                </div>
              </Link>
            </div>
            {/* <div class="col-1"></div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserSideBar;
