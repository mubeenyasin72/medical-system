import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./sidebar.css";

class SideBar extends Component {
  state = {};
  componentDidMount() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
        $(this).toggleClass("active");
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div class="dashboard-body">
          <div class="wrapper">
            <nav id="sidebar">
              <div class="sidebar-header">
                <div style={{ textAlign: "center" }}>
                  <h5>Super Admin</h5>
                </div>
              </div>
              <ul class="list-unstyled CTAs">
                <li>
                  <Link to="/SuperAdmin/Dashboard" class="article">
                    <img
                      width="18px"
                      style={{ marginRight: "7px", marginTop: "-4px" }}
                      src={require("../../../Assets/Icons/dashboard.png")}
                    />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/SuperAdmin/VendorList" class="article">
                    <img
                      width="18px"
                      style={{ marginRight: "7px", marginTop: "-4px" }}
                      src={require("../../../Assets/Icons/vendors.png")}
                    />
                    Vendor List
                  </Link>
                </li>
                <li>
                  <Link to="/SuperAdmin/Category" class="article">
                    <img
                      width="18px"
                      style={{ marginRight: "7px", marginTop: "-4px" }}
                      src={require("../../../Assets/Icons/plus.png")}
                    />
                    Add Categories
                  </Link>
                </li>
                <li>
                  <Link to="/SuperAdmin/ContactInformation" class="article">
                    <img
                      width="18px"
                      style={{ marginRight: "7px", marginTop: "-4px" }}
                      src={require("../../../Assets/Icons/contact.png")}
                    />
                    Contact Us Messages
                  </Link>
                </li>
              </ul>
            </nav>

            <div id="content">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="nav  ml-auto">
                      <li class="nav-item active">
                        <div class="dropdown">
                          <div
                            data-toggle="dropdown"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              class=""
                              alt="profile"
                              style={{ width: "35px", borderRadius: "50%" }}
                              src={require("../../../Assets/Images/team-3-800x800.jpg")}
                            />
                            <span style={{ fontSize: "14px" }}>
                              &nbsp;&nbsp;Olivia
                            </span>
                            <img
                              style={{ width: "16px" }}
                              src={require("../../../Assets/Icons/dropdown.png")}
                            />
                          </div>
                          <Link to="/SuperAdmin/Login">
                            <div
                              class="dropdown-menu profile-dropdown-menue"
                              aria-labelledby="dropdownMenu2"
                            >
                              Logout
                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div>{this.props.children}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
