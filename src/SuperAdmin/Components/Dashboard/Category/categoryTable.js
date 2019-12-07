import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./categoryTable.css";

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
                    <th scope="col">CategoryName</th>
                    <th scope="col">Add Sub Category</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Plants</td>
                    <td>
                      <Link to="/SuperAdmin/SubCategory">
                        <button class="btn sub-cat-btn">
                          Add Sub Category
                        </button>
                      </Link>
                    </td>
                    <td>
                      <div class="dropdown">
                        <a
                          class="category-actions dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Actions
                        </a>
                        <div class="dropdown-menu category-menu">
                          <button class="dropdown-item category-menu-item">
                            Edit
                          </button>
                          <button class="dropdown-item category-menu-item">
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
