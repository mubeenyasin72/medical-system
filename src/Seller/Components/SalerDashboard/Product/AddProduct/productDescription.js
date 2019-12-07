import "./addProduct.css";

import CKEditor from "ckeditor4-react";

import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid bg-white">
          <div class="row product-name-title-container">
            <div class="product-name-title-text">Product key information</div>
          </div>
          <div class="row">
            <div class="col-12">
              {/* Product Description */}
              <div class="row mt-3 pb-4">
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <div class="product-name-body-title">
                      Enter Description <span class="text-danger">*</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <div class="product-name-body-description">
                      <CKEditor class="product-name-body-description" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Images */}
              <div class="row mt-3 pb-4">
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div class="row">
                    <div class="product-name-body-title">
                      Upload Images <span class="text-danger">*</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                  <div class="row">
                    <div class="product-image-container">
                      <img class="product-image" src={this.state.file} />
                    </div>
                  </div>
                  <div class="row">
                    <div class="product-image-button-container">
                      <input
                        class="pb-2"
                        type="file"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Description;
