import './orderInformation.css';

import React, { Component } from 'react';

class OrderDispatch extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row pt-5 pb-5">
                    <div class="col-0 col-sm-0 col-md-6 col-lg-8 col-xl-8"></div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="row">
                            <div class="col-4 text-right">
                                <button class="btn btn-order-cancel">Cancel</button>
                            </div>
                            <div class="col-8 text-left">
                                <button class="btn btn-order-dispatch">Ready To Dispatch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default OrderDispatch;