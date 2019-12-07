import React, { Component } from 'react';

class BreadCrumb extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid">
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb bg-bread-crumb">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="#">Products</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Add Products
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment> );
    }
}
 
export default BreadCrumb;