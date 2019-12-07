import "./statistics.css";

import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [2013, 2014, 2015, 2016, 2017, 2018],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.4,
      backgroundColor: "#935CCB",
      borderColor: "#935CCB",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#935CCB",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#935CCB",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55]
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.4,
      backgroundColor: "#43E0AA",
      borderColor: "#43E0AA",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#43E0AA",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#43E0AA",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [55, 50, 20, 31, 21, 100]
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.4,
      backgroundColor: "#24AEFC",
      borderColor: "#24AEFC",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#24AEFC",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#24AEFC",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 50, 70, 90, 40, 60]
    }
  ]
};

const options = {
  legend: {
    display: false
  }
};

class LineChart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid bg-white">
          {this.props.title ? this.props.title : "Title"}
          <hr align="left" class="stat-hr" />
          <div class="row">
            <div class="col">
              <Line ref="chart" data={data} options={options} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LineChart;
