import React, { Component } from "react";
import SideBar from "../../Components/Dashboard/sideBar/sidebar";
import VendorList from "../../Components/Dashboard/VendorList/vendorList";

class VendorListView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SideBar>
          <VendorList />
        </SideBar>
      </React.Fragment>
    );
  }
}

export default VendorListView;
