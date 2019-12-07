import './statistics.css';

import React, { Component } from 'react';

class LatestOrder extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row mt-3">
                    <div class="col-12">
                        <h6 class=""><span class="stat-latest-order-title-border">LATEST</span> ORDERS</h6>
                    </div>
                </div>
                <div class="row mt-2 pb-2 stat-latest-order-border">
                    <div class="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                        <div class="row">
                            <img 
                                class="stat-latest-order-img" 
                                alt="latest-order"
                                src="https://images.unsplash.com/photo-1521459382675-a3f2f35a6b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-5">
                        <div class="row">
                            <div class="col-12 text-left">
                                <h6 class="pt-3">Mike Hussy</h6>
                            </div>
                        </div>
                        <div class="row stat-latest-order-row-display">
                            <div class="col-12 text-left">
                                <div>Creative Art Director</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-4 stat-latest-order-display"></div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                        <h5 class="mt-3 stat-latest-order-font-weight">$5000</h5>
                    </div>
                    <div class="col-12 stat-latest-order-bottom-display text-left">
                        <div>Creative Art Director</div>
                    </div>
                </div>
                <div class="row mt-2 pb-2 stat-latest-order-border">
                    <div class="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                        <div class="row">
                            <img 
                                class="stat-latest-order-img" 
                                alt="latest-order"
                                src="https://images.unsplash.com/photo-1521459382675-a3f2f35a6b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-5">
                        <div class="row">
                            <div class="col-12 text-left">
                                <h6 class="pt-3">Mike Hussy</h6>
                            </div>
                        </div>
                        <div class="row stat-latest-order-row-display">
                            <div class="col-12 text-left">
                                <div>Creative Art Director</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-4 stat-latest-order-display"></div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                        <h5 class="mt-3 stat-latest-order-font-weight">$2000</h5>
                    </div>
                    <div class="col-12 stat-latest-order-bottom-display text-left">
                        <div>Creative Art Director</div>
                    </div>
                </div>
                <div class="row mt-2 pb-2">
                    <div class="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3">
                        <div class="row">
                            <img 
                                class="stat-latest-order-img" 
                                alt="latest-order"
                                src="https://images.unsplash.com/photo-1521459382675-a3f2f35a6b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-5">
                        <div class="row">
                            <div class="col-12 text-left">
                                <h6 class="pt-3">Mike Hussy</h6>
                            </div>
                        </div>
                        <div class="row stat-latest-order-row-display">
                            <div class="col-12 text-left">
                                <div>Creative Art Director</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-4 stat-latest-order-display"></div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                        <h5 class="mt-3 stat-latest-order-font-weight">$5000</h5>
                    </div>
                    <div class="col-12 stat-latest-order-bottom-display text-left">
                        <div>Creative Art Director</div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default LatestOrder;