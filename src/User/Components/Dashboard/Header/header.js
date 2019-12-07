// import "./header.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-white user-header">
          <a class="navbar-brand" style={{ marginLeft: "40px" }} href="#">
            E-Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <div style={{ flex: "1" }}></div> */}
            <ul class="navbar-nav user-header-ul">
              <li class="nav-item active">
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control user-header-search-input"
                    placeholder="Sport shoes"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-prepend">
                    <select class="form-control  user-header-search-select">
                      <option selected hidden>
                        All Categories
                      </option>
                      <option>Mens Clothing</option>
                      <option>Womens Clothing</option>
                      <option>Mens Shoes</option>
                      <option>Womens Shoes</option>
                      <option>Mens Clothing</option>
                      <option>Womens Clothing</option>
                      <option>Mens Shoes</option>
                      <option>Womens Shoes</option>
                      <option>Mens Clothing</option>
                      <option>Womens Clothing</option>
                      <option>Mens Shoes</option>
                      <option>Womens Shoes</option>
                    </select>
                  </div>
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text user-header-search-prepend"
                      id="basic-addon1"
                    >
                      <img
                        alt="search"
                        class="user-header-search-icon"
                        src={require("../../../../Assets/Icons/UserHeader/search.svg")}
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li class="nav-item user-header-cart">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12">
                      <img
                        alt="cart"
                        class="user-header-cart-icon float-left"
                        src={require("../../../../Assets/Icons/UserHeader/shopping-cart.svg")}
                      />
                      <span class="badge badge-pill badge-danger float-left">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item user-header-wishlist">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-3 col-md-1 col-lg-5 col-xl-5">
                      <img
                        alt="wishlist"
                        class="user-header-wishlist-icon"
                        src={require("../../../../Assets/Icons/UserHeader/like.svg")}
                      />
                    </div>
                    <div class="col-sm-3 col-md-11 col-lg-7 col-xl-7">
                      <div class="row user-header-wishlist-text mt-1">Wish</div>
                      <div class="row user-header-wishlist-text">List</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="user-header-auth">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6 user-header-sign-border">
                    <span class="text-center float-right">Ali Murtaza</span>
                  </div>
                  <Link class="col-5 text-center" to="/User/Login">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
