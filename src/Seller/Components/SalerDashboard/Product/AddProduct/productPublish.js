import './addProduct.css';

import React, { Component } from 'react';

class Publish extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row pt-5 pb-5">
                    <div class="col-0 col-sm-0 col-md-6 col-lg-9 col-xl-9"></div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <div class="row">
                            <div class="col-6 text-right">
                                <button class="btn btn-product-cancel">Cancel</button>
                            </div>
                            <div class="col-6 text-left">
                                <button class="btn btn-product-publish">Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Publish;