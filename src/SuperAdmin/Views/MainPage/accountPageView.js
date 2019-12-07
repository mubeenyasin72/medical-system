import React, { Component } from "react";
import Sidebar from "../../Components/Dashboard/sideBar/sidebar";
import AccountPage from "../../Components/Dashboard/AccountsPage/accountPage";

class AccountPageView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <AccountPage />
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default AccountPageView;
