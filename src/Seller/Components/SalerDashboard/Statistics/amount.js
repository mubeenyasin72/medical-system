import './statistics.css';

import React, { Component } from 'react';

class Amount extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-white">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div><span class="stat-amount-underline">TOTAL</span>  {this.props.title}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <div class="stat-amount-box"></div>
                            </div>
                            <div class="col-9">
                                <div class="display-4">${this.props.amount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default Amount;