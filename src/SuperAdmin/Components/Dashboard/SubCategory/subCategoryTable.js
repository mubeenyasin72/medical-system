import React, { Component } from "react";
import "./subCategoryTable.css";

class CategoryTable extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body" style={{ color: "#fbb03b" }}>
                Category List
              </div>
              <table class="table text-center">
                <thead style={{ backgroundColor: "#fbb03b", color: "#ffffff" }}>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Sub Category Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Red Rose</td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="sub-category-actions dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </a>
                        <div class="dropdown-menu sub-category-menu">
                          <button class="dropdown-item sub-category-menu-item">
                            Edit
                          </button>
                          <button class="dropdown-item sub-category-menu-item">
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryTable;
