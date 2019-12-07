import React, { Component } from "react";

class BreadCrumb extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ul class="breadcrumb bg-bread-crumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              {/* <li class="breadcrumb-item">
                <a href="#">Profile</a>
              </li> */}
              <li class="breadcrumb-item active" aria-current="page">
                Sale Statistics
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default BreadCrumb;
