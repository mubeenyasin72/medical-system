import React, { Component } from "react";
import StatCard from "./statCard";
import DoughnutChart from "./doughnutChart";
import LineChart from "./lineChart";
import "./accountPage.css";

class AccountPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="col-12 row">
            <div style={{ marginLeft: "16px", marginTop: "10px" }}>
              <StatCard title="CONTACT US" value="10002" />
            </div>
            <div style={{ marginLeft: "16px", marginTop: "10px" }}>
              <StatCard title="TOTAL SALE" value="1200" />
            </div>
            <div style={{ marginLeft: "16px", marginTop: "10px" }}>
              <StatCard
                src={require("../../../Assets/Icons/dollar.png")}
                title="TOTAL PROFIT"
                value="$8000"
              />
            </div>
          </div>
          <div class="col-12 row">
            <div class="col-xl-6 col mt-5">
              <div class="card shadow">
                <div class="card-body">
                  <LineChart title="SALES REPORTS" />
                </div>
              </div>
            </div>
            <div class="col-xl-6 mt-5">
              <div class="card shadow">
                <div class="card-body">
                  <DoughnutChart title="USER STATISTICS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountPage;
