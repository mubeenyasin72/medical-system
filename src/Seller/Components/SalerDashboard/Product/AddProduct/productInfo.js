import './addProduct.css';

import React, { Component } from 'react';

class Info extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row product-name-title-container">
                    <div class="product-name-title-text">Product key information</div>
                </div>
                <div class="row">
                    <div class="col-12">
                        {/* Product Price */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Enter Price <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Product name"/>
                                </div>
                            </div>
                        </div>
                        {/* Product Size */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Enter Size <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Enter size"/>
                                </div>
                            </div>
                        </div>
                        {/* Product Quantity */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Quantity <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Quantity that is available"/>
                                </div>
                            </div>
                        </div>
                        {/* Product Weight */}
                        <div class="row mt-3">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Weight <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <input class="form-control product-name-body-input" placeholder="Write weight in kgs"/>
                                </div>
                            </div>
                        </div>
                        {/* Product Color */}
                        <div class="row mt-3 pb-4">
                            <div class="col-5 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div class="row">
                                    <div class="product-name-body-title">Color <span class="text-danger">*</span></div>
                                </div>
                            </div>
                            <div class="col-7 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div class="row">
                                    <select class="form-control product-name-body-select">
                                        <option selected hidden>Select Color</option>
                                        <option>Usman</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Info;