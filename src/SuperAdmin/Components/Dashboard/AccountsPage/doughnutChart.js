import "./statistics.css";

import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Desktop", "Laptop", "Mobile"],
  datasets: [
    {
      label: "User Statistics",
      backgroundColor: ["#935CCB", "#43E0AA", "#24AEFC"],
      borderColor: ["#935CCB", "#43E0AA", "#24AEFC"],
      data: [20, 20, 30]
    }
  ]
};

const options = {
  legend: {
    display: false
  }
};

class Chart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid bg-white">
          {this.props.title ? this.props.title : "Title"}
          <hr align="left" class="stat-hr" />
          <div class="row">
            <div class="col-7 col-sm-7 col-md-8 col-lg-9 col-xl-9">
              <div class="row pt-3">
                <Doughnut options={options} ref="chart" data={data} />
              </div>
            </div>
            <div class="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-3">
              <div class="row stat-chart-box-container">
                <div class="col">
                  <div class="row">
                    <div class="stat-chart-color-box"></div>
                    <div class="stat-chart-box-text ml-2">Page Views</div>
                  </div>
                  <div class="row">
                    <div class="stat-chart-box-bottom-text">1200</div>
                  </div>
                </div>
              </div>
              <div class="row stat-chart-box-container">
                <div class="col">
                  <div class="row">
                    <div class="stat-chart-color-box"></div>
                    <div class="stat-chart-box-text">Impressions</div>
                  </div>
                  <div class="row">
                    <div class="stat-chart-box-bottom-text">35000</div>
                  </div>
                </div>
              </div>
              <div class="row stat-chart-box-container">
                <div class="col">
                  <div class="row">
                    <div class="stat-chart-color-box"></div>
                    <div class="stat-chart-box-text">Clicks</div>
                  </div>
                  <div class="row">
                    <div class="stat-chart-box-bottom-text">400</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col">
              <div class="w-100">
                <div class="stat-chart-color-dot-desktop"></div>
                <div class="stat-chart-dot-text">Desktop</div>
              </div>
            </div>
            <div class="col">
              <div class="w-100">
                <div class="stat-chart-color-dot-laptop"></div>
                <div class="stat-chart-dot-text">Laptop</div>
              </div>
            </div>
            <div class="col">
              <div class="w-100">
                <div class="stat-chart-color-dot-mobile"></div>
                <div class="stat-chart-dot-text">Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chart;
