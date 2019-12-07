import React, { Component } from "react";
import Sidebar from "../../Components/Dashboard/sideBar/sidebar";
import AddCategory from "../../Components/Dashboard/Category/addCategory";
import CategoryTable from "../../Components/Dashboard/Category/categoryTable";

class CategoryView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <AddCategory />
          <div class="mt-4">
            <CategoryTable />
          </div>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default CategoryView;
