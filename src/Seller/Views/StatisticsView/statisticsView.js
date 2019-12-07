import "./statisticsView.css";

import React, { Component } from "react";

import BreadCrumb from "../../Components/SalerDashboard/Statistics/breadCrumb";
import Amount from "../../Components/SalerDashboard/Statistics/amount";
import Header from "../../Components/SalerDashboard/Header/header";
import LineChart from "../../Components/SalerDashboard/Statistics/lineChart";
import DoughNutChart from "../../Components/SalerDashboard/Statistics/doughnutChart";
import LatestOrder from "../../Components/SalerDashboard/Statistics/latestOrders";

class StatisticsView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid stat-view-container">
          <div class="row">
            <div class="w-100">
              <Header />
            </div>
          </div>
          <div class="row ml-5 mr-5">
            <BreadCrumb />
          </div>
          <div class="row pb-3">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row pt-5">
                <div class="col-12">
                  <h5 class="stat-view-title">Overall Sales Statistics</h5>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                  <div class="row shadow">
                    <Amount title="SALE" amount="1200" />
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 stat-view-amount">
                  <div class="row shadow">
                    <Amount title="PROFIT" amount="8000" />
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div class="row h-100">
                    <div class="card w-100 h-100 shadow">
                      <div class="card-body h-100">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-0 col-sm-0 col-md-0 col-lg-1 col-xl-1" />
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 stat-view-chart">
                  <div class="row h-100">
                    <div class="card w-100 shadow">
                      <div class="card-body">
                        <DoughNutChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4 shadow">
                <LatestOrder />
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StatisticsView;
