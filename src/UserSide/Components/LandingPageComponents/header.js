import React, { Component } from "react";
import $ from "jquery";
import "./header.css";

class Header extends Component {
  state = {};
  componentDidMount() {
    $(function() {
      var games = [
        "Baseball",
        "Tennis",
        "Golf",
        "Cricket",
        "Football",
        "Hockey",
        "Badminton",
        "Volleyball",
        "Boxing",
        "Kabaddi",
        "Chess",
        "Long Jump",
        "High Jump",
        "Racing",
        "Handball",
        "Swimming",
        "Wrestling"
      ];

      //   $("#autocomplete").autoComplete({
      //     source: games
      //   });
    });
  }
  render() {
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#" }}
        >
          <a class="navbar-brand" href="#" style={{ marginLeft: "40px" }}>
            {/* <img
              style={{ width: "50px" }}
              src={require("../../Assets/Logo/Logo.PNG")}
            /> */}
            Multi Vendor
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ marginLeft: "12%" }}
            class="collapse navbar-collapse"
            id="navbarTogglerDemo03"
          >
            <div class="form-inline">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-input"
                  style={{ width: "550px" }}
                  placeholder="Search..."
                  id="autocomplete"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="category-dropdown" id="basic-addon2">
                    <div class="dropdown">
                      <button
                        class="btn category-dropdown-button dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Categories
                      </button>
                      <div
                        class="dropdown-menu category-dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="dropdown-item cayegory-dropdown-item">
                          Women's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Men's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Shoes
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Women's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Men's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Shoes
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Women's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Men's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Shoes
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Women's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Men's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Shoes
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Women's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Men's Clothing
                        </div>
                        <div class="dropdown-item cayegory-dropdown-item">
                          Shoes
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="input-group-append">
                  <span class="input-group-text seacrch-icon" id="basic-addon2">
                    <img
                      style={{ width: "21px" }}
                      src={require("../../Assets/Icons/search.png")}
                    />
                  </span>
                </div>
              </div>
            </div>
            <ul
              style={{ marginLeft: "3%" }}
              class="navbar-nav mr-auto mt-2 mt-lg-0"
            >
              <li class="nav-item">
                <a class="nav-link cart-button" href="#">
                  <img
                    style={{ width: "35px" }}
                    src={require("../../Assets/Icons/cart.png")}
                  />
                  <span class="badge">1</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link cart-button" href="#">
                  <img
                    style={{ width: "35px" }}
                    src={require("../../Assets/Icons/heart.png")}
                  />
                  <span class="badge badge-pill">6</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
