import "./header.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-white user-header">
          <Link class="navbar-brand" style={{ marginLeft: "40px" }} to="/">
            E-Shop
          </Link>
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
            <ul class="navbar-nav user-header-ul">
              <li class="nav-item active">
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control user-header-search-input"
                    placeholder="Search..."
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
                      <Link to="/User/Shopping_Cart">
                        <img
                          alt="cart"
                          style={{ cursor: "pointer" }}
                          class="user-header-cart-icon float-left"
                          src={require("../../../../Assets/Icons/UserHeader/shopping-cart.svg")}
                        />
                      </Link>
                      <span
                        class="badge badge-pill float-left"
                        style={{ backgroundColor: "#fbb03b", color: "#ffffff" }}
                      >
                        2
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item user-header-wishlist">
                <div class="container-fluid">
                  <div class="row" style={{ cursor: "pointer" }}>
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
                    <div class="row">
                      <div class="col-2">
                        <img
                          alt="profile"
                          class="user-header-profile"
                          src={require("../../../../Assets/Icons/UserHeader/profile.svg")}
                        />
                      </div>
                      <div class="col-8">
                        <Link class="text-center float-right" to="/User/Login">
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link class="col-5 text-center" to="/User/Signup">
                    Sign Up
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
