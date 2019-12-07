import "./productOverView.css";

import React, { Component } from "react";

import BreadCrumb from "../../Components/SalerDashboard/Product/ProductOverview/breadCrumb";
import Header from "../../Components/SalerDashboard/Header/header";
import TableView from "../../Components/SalerDashboard/Product/ProductOverview/tableView";

class ProductOverView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid product-over-view-container">
          <div class="row">
            <div class="w-100">
              <Header />
            </div>
          </div>
          <div class="row pl-5 pr-5">
            <BreadCrumb />
          </div>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row pt-4">
                <h4 class="product-over-view-title">Add Product</h4>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="row">
                    <div class="col-3 product-over-view-filter-text product-over-view-border-right text-danger">
                      All (10)
                    </div>
                    <div class="col-3 product-over-view-filter-text product-over-view-border-right">
                      Live (10)
                    </div>
                    <div class="col-3 product-over-view-filter-text product-over-view-border-right">
                      Sold Out (10)
                    </div>
                    <div class="col-3 product-over-view-filter-text">
                      Inactive (10)
                    </div>
                  </div>
                </div>
                <div class="col-0 col-sm-0 col-md-4 col-lg-6 col-xl-7"></div>
              </div>
              <div class="row mt-3 pb-4">
                <div class="w-100">
                  <TableView />
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductOverView;
