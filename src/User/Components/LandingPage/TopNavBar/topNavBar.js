import React, { Component } from "react";
import "./topnavBar.css";
import { Link } from "react-router-dom";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="top-nav">
          <input type="checkbox" id="top-nav-check" />
          <div class="top-nav-header">
            <div class="top-nav-title">JoGeek</div>
          </div>

          {/* <div class="top-nav-btn">
            <label class="top-nav-label" for="top-nav-check">
              <span class="top-nav-span"></span>
              <span class="top-nav-span"></span>
              <span class="top-nav-span"></span>
            </label>
          </div> */}

          <div class="top-nav-links">
            <a class="top-nav-a" href="#">
              SAVE MORE ON APP
            </a>
            <Link class="top-nav-a" to="/User/Track_Order">
              TRACK MY ORDER
            </Link>
            <a class="top-nav-a" href="#">
              CUSTOMER CARE
            </a>
            <Link class="top-nav-a" to="/Seller/Signup">
              SELL ON PICK WAY
            </Link>
            <Link class="top-nav-a" to="/Seller/Login">
              LOGIN AS VENDOR
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopNavBar;
