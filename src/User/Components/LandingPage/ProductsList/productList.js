import React, { Component } from "react";
// import "./productList.css";

import ProductCard from "../ProductCard/productCard";

class ProductList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <ProductCard
              src={require("../../../../Assets/Images/Shoes.png")}
              title="Mens Shoes"
              price="325.99"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <ProductCard
              src={require("../../../../Assets/Images/watch.png")}
              title="Wrist Watch"
              price="3025.99"
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <ProductCard
              src={require("../../../../Assets/Images/mobile.webp")}
              title="Samsung Galaxy(A50)"
              price="250.99"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
