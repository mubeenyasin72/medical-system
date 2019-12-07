import "./productOverView.css";

import React, { Component } from "react";

class TableView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="conatiner-fluid">
          <div style={{ overflowX: "auto", overflowY: "hidden" }}>
            <table class="table table-bordered bg-white">
              <thead class="table-view-thead">
                <tr>
                  <th class="table-view-th">Name</th>
                  <th class="table-view-th">Seller Sku</th>
                  <th class="table-view-th">Created</th>
                  <th class="table-view-th">Retail Price</th>
                  <th class="table-view-th">Available</th>
                  <th class="table-view-th">Visible</th>
                  <th class="table-view-th">Active</th>
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
                      <a
                        class="table-view-cursor-pointer text-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Actions
                      </a>
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
                      <a
                        class="table-view-cursor-pointer text-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Actions
                      </a>
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
                      <a
                        class="table-view-cursor-pointer text-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Actions
                      </a>
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

export default TableView;
