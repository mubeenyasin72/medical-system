import React, { Component } from "react";
import "./vendorList.css";

class VendorList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class=" vendor-container">
            <p class="vendor-heading">Vendor List</p>
            <table class="table ">
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img
                      class="vendor-image"
                      src={require("../../../Assets/Images/team-4-800x800.jpg")}
                    />
                    <row>
                      <span class="vendor-span-name">Mike Hussy</span>
                      <span class="vendor-span-desig ">
                        (Creative Art Director)
                      </span>
                    </row>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div class="dropdown">
                      <img
                        data-toggle="dropdown"
                        class="menue-icon"
                        src={require("../../../Assets/Icons/menu.png")}
                      />

                      <div class="dropdown-menu menue-drop-down">Block</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img
                      class="vendor-image"
                      src={require("../../../Assets/Images/team-4-800x800.jpg")}
                    />
                    <row>
                      <span class="vendor-span-name">Mike Hussy</span>
                      <span class="vendor-span-desig ">
                        (Creative Art Director)
                      </span>
                    </row>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div class="dropdown">
                      <img
                        data-toggle="dropdown"
                        class="menue-icon"
                        src={require("../../../Assets/Icons/menu.png")}
                      />

                      <div class="dropdown-menu menue-drop-down">Block</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <img
                      class="vendor-image"
                      src={require("../../../Assets/Images/team-4-800x800.jpg")}
                    />
                    <row>
                      <span class="vendor-span-name">Mike Hussy</span>
                      <span class="vendor-span-desig ">
                        (Creative Art Director)
                      </span>
                    </row>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div class="dropdown">
                      <img
                        data-toggle="dropdown"
                        class="menue-icon"
                        src={require("../../../Assets/Icons/menu.png")}
                      />

                      <div class="dropdown-menu menue-drop-down">Block</div>
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

export default VendorList;
