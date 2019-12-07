import React, { Component } from "react";
import Sidebar from "../../Components/Dashboard/sideBar/sidebar";
import AddSubCategory from "../../Components/Dashboard/SubCategory/addSubCategory";
import SubCategoryTable from "../../Components/Dashboard/SubCategory/subCategoryTable";

class SubCategoryView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <AddSubCategory />
          <div class="mt-4">
            <SubCategoryTable />
          </div>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default SubCategoryView;
