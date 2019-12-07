import './addProduct.css';

import React, { Component } from 'react';

class Naming extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row product-name-title-container">
                    <div class="product-name-title-text">What You're selling</div>
                </div>
                <div class="row">
                    <div class="col-12">
                        {/* Product Name */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Product Name</div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Product name"/>
                                </div>
                            </div>
                        </div>
                        {/* Product Category */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Category <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <select class="form-control product-name-body-select">
                                        <option selected hidden>Select any category</option>
                                        <option>Usman</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Product Sub Category */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">SubCategory <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <select class="form-control product-name-body-select">
                                        <option selected hidden>Select any sub category</option>
                                        <option>Usman</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Product Brand */}
                        <div class="row mt-3 pb-4">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Brand <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Brand name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Naming;