import "./orderOverview.css";

import React, { Component } from "react";

class OrderOverview extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="conatiner-fluid">
          <div style={{ overflowX: "auto" }}>
            <table class="table table-bordered bg-white">
              <thead class="table-view-thead">
                <tr>
                  <th class="table-view-th">Order No.</th>
                  <th class="table-view-th">Order Date</th>
                  <th class="table-view-th">Pending Since</th>
                  <th class="table-view-th">Ship on time SLA</th>
                  <th class="table-view-th">Payment Method</th>
                  <th class="table-view-th">Retail Price</th>
                  <th class="table-view-th">Status</th>
                  <th class="table-view-th">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Usman</td>
                  <td>1</td>
                  <td>2003</td>
                  <td>20$</td>
                  <td>Yes</td>
                  <td>Visible</td>
                  <td>Not Active</td>
                  <td>
                    <div class="dropdown">
                      <span
                        style={{ cursor: "pointer" }}
                        class="table-view-cursor-pointer text-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Actions
                      </span>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Edit Details
                        </a>
                        <a class="dropdown-item" href="#">
                          Delete Products
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderOverview;
