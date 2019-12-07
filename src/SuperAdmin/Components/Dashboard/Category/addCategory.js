import React, { Component } from "react";
import "./addCategory.css";

class AddCategory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <div class="container"> */}
        <div class="card category-card">
          <div class="card-body text-center">
            <div
              style={{
                marginTop: "20px",
                color: "#5A5A5A"
              }}
            >
              <h4>Add Category</h4>
              <span style={{ fontSize: "13px" }}>
                Enter the category if it is not in the list of categories
              </span>
              <div class="mt-4 p-3">
                <input
                  placeholder="Add Category"
                  class="form-control category-input"
                  type="text"
                />
              </div>
              <div class="mt-0 p-3">
                <button class="btn w-100 category-btn">ADD</button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default AddCategory;
