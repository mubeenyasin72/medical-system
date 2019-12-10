import React, { Component } from "react";

class BreadCrums extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          aria-label="breadcrumb"
          style={{ width: "100%", minWidth: "1200px" }}
        >
          <ol class="breadcrumb" style={{ backgroundColor: "#ffffff" }}>
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Men's Tops</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">T-Shirt</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              T-Shirt Summer Vibes
            </li>
          </ol>
        </nav>
      </React.Fragment>
    );
  }
}

export default BreadCrums;
