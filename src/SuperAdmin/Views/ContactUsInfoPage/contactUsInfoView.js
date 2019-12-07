import React, { Component } from "react";
import SideBar from "../../Components/Dashboard/sideBar/sidebar";
import ContactUsInfo from "../../Components/Dashboard/ContactUsInfo/contactUsInfo";

class ContactUsInfoView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SideBar>
          <ContactUsInfo />
        </SideBar>
      </React.Fragment>
    );
  }
}

export default ContactUsInfoView;
