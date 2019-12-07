import "./addProductView.css";

import React, { Component } from "react";

import BreadCrumb from "../../Components/SalerDashboard/Product/AddProduct/breadCrumb";
import Header from "../../Components/SalerDashboard/Header/header";
import Naming from "../../Components/SalerDashboard/Product/AddProduct/productNaming";
import Info from "../../Components/SalerDashboard/Product/AddProduct/productInfo";
import Description from "../../Components/SalerDashboard/Product/AddProduct/productDescription";
import Publish from "../../Components/SalerDashboard/Product/AddProduct/productPublish";

class AddProductView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid add-product-view-container">
          <div class="row">
            <div class="w-100">
              <Header />
            </div>
          </div>
          <div class="row  mr-5 ml-5">
            <BreadCrumb />
          </div>
          <div class="row">
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div class="row pt-4">
                <h4 class="add-product-view-title">Add Product</h4>
              </div>
              <div class="row mt-4">
                <Naming />
              </div>
              <div class="row mt-4">
                <Info />
              </div>
              <div class="row mt-4">
                <Description />
              </div>
              <div class="row mt-4 pb-4">
                <Publish />
              </div>
            </div>
            <div class="col-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProductView;
