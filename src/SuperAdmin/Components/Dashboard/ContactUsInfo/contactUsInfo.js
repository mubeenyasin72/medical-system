import React, { Component } from "react";
import "./contactUsInfo.css";

class ContactUsInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div style={{ color: "#69696A", marginBottom: "30px" }}>
            <h3>Contact Us Messages</h3>
          </div>
          <table class="table table-hover table-bordered text-center">
            <thead
              style={{
                backgroundColor: "#F7F8FA",
                color: "#69696A",
                fontSize: "14px"
              }}
            >
              <tr>
                <th scope="col" style={{ padding: "5px" }}>
                  Name
                </th>
                <th scope="col" style={{ padding: "5px" }}>
                  Email
                </th>
                <th scope="col" style={{ padding: "5px" }}>
                  Message
                </th>
              </tr>
            </thead>
            <tbody style={{ marginTop: 20, backgroundColor: "#ffffff" }}>
              <tr>
                <td>Salman Ashraf</td>
                <td>muhammadsalman00012@gmail.com</td>
                <td>This is good site</td>
              </tr>
              <tr>
                <td>Salman Ashraf</td>
                <td>muhammadsalman00012@gmail.com</td>
                <td>This is good site</td>
              </tr>
              <tr>
                <td>Salman Ashraf</td>
                <td>muhammadsalman00012@gmail.com</td>
                <td>This is good site</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUsInfo;
