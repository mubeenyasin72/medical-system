import "./header.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-md"
          style={{ backgroundColor: "#efc654" }}
        >
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
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
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown navbar-link-margin">
                <a
                  class="nav-link dropdown-toggle navbar-link-style navbar-link-style"
                  href="#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  Products
                </a>
                <div
                  class="dropdown-menu header-dropdown-menue"
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    class="dropdown-item header-dropdown-item"
                    to="/Seller/Add_Products"
                  >
                    Add Product
                  </Link>
                  <Link
                    class="dropdown-item header-dropdown-item"
                    to="/Seller/All_Products"
                  >
                    All Products
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown navbar-link-margin">
                <a
                  class="nav-link dropdown-toggle navbar-link-style"
                  href="#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  Orders
                </a>
                <div
                  class="dropdown-menu header-dropdown-menue"
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    class="dropdown-item header-dropdown-item"
                    to="/Seller/Order_Info"
                  >
                    Orders Information
                  </Link>
                  <Link
                    class="dropdown-item header-dropdown-item"
                    to="/Seller/All_Orders"
                  >
                    All Orders
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown navbar-link-margin">
                <a
                  class="nav-link dropdown-toggle navbar-link-style"
                  href="#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  Promotions
                </a>
                <div
                  class="dropdown-menu header-dropdown-menue"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item header-dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item header-dropdown-item" href="#">
                    Another action
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown navbar-link-margin">
                <a
                  class="nav-link dropdown-toggle navbar-link-style"
                  href="#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  Finance
                </a>
                <div
                  class="dropdown-menu header-dropdown-menue"
                  aria-labelledby="navbarDropdown"
                >
                  {/* <a class="dropdown-item header-dropdown-item" href="#">
                    Action
                  </a> */}
                  <Link
                    class="dropdown-item header-dropdown-item"
                    to="/Seller/Statistics"
                  >
                    Statisctics
                  </Link>
                  {/* <a class="dropdown-item header-dropdown-item" href="#">
                    Another action
                  </a> */}
                </div>
              </li>
            </ul>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle navbar-link-style"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  class="navbar-profile"
                  alt="profile"
                  src="https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                Profile
              </a>
              <div
                class="dropdown-menu header-dropdown-menue"
                aria-labelledby="navbarDropdown"
              >
                <Link
                  class="dropdown-item header-dropdown-item"
                  to="/Seller/Chat"
                >
                  Chat
                </Link>
                <Link
                  class="dropdown-item header-dropdown-item"
                  to="/Seller/Login"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
