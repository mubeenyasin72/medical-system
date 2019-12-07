import React, { Component } from "react";
import "./statCard.css";

class StatCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="card stat-card shadow">
          <div class="card-body">
            {this.props.title ? this.props.title : "Title"}
            <hr align="left" class="stat-hr" />
            <div class="row">
              <div class="col-12">
                <img
                  width="60px"
                  src={
                    this.props.src
                      ? this.props.src
                      : require("../../../Assets/Icons/gift.png")
                  }
                />
                <span class="stat-span">
                  {this.props.value ? this.props.value : "00000"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StatCard;
