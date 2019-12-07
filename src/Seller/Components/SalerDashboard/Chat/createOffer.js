import './chat.css';

import React, { Component } from 'react';

class CreateOffer extends Component {
    state = { 
        offer: false
     }

    offerNext(){
        this.setState({offer: !this.state.offer});
    }

    offerBack(){
        this.setState({offer: !this.state.offer});
    }

    render() { 
        return ( <React.Fragment>
            <div class="container-fluid">
                <button type="button" class="btn btn-create-offer" data-toggle="modal" data-target="#createOffer">
                    Custom Offer
                </button>
                <div class="modal fade" id="createOffer">
                    <div class="modal-dialog modal-dialog-scrollable modal-lg">
                        <div class="modal-content">
                            <div class="modal-header create-offer-head">
                                <h4 class="modal-title text-white">Create  Offer</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    {/* Products */}
                                    <div 
                                        class="row"
                                        style={{display: this.state.offer? "none" : "block"}}
                                    >
                                        <div class="col-1"></div>
                                        <div class="col-10">
                                            <div 
                                                class="row mb-2 pb-2 create-offer-product"
                                                onClick={()=>this.offerNext()}
                                            >
                                                <div class="col-4">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-8">
                                                    <h3>Product 1</h3>
                                                </div>
                                            </div>
                                            <div 
                                                class="row mb-2 pb-2 create-offer-product"
                                                onClick={()=>this.offerNext()}
                                            >
                                                <div class="col-4">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-8">
                                                    <h3>Product 1</h3>
                                                </div>
                                            </div>
                                            <div 
                                                class="row mb-2 pb-2 create-offer-product"
                                                onClick={()=>this.offerNext()}
                                            >
                                                <div class="col-4">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-8">
                                                    <h3>Product 1</h3>
                                                </div>
                                            </div>
                                            <div 
                                                class="row mb-2 pb-2 create-offer-product"
                                                onClick={()=>this.offerNext()}
                                            >
                                                <div class="col-4">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-8">
                                                    <h3>Product 1</h3>
                                                </div>
                                            </div>
                                            <div 
                                                class="row mb-2 pb-2 create-offer-product"
                                                onClick={()=>this.offerNext()}
                                            >
                                                <div class="col-4">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-8">
                                                    <h3>Product 1</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    {/* Create Offer */}
                                    <div 
                                        class="row"
                                        style={{display: this.state.offer? "block" : "none"}}
                                    >
                                        <div class="col-12">
                                            <div class="row mt-2">
                                                <div class="col-6 text-left">
                                                    <p class="create-offer-top-text">
                                                        Show Nick Login Slip Shoe fro sports
                                                    </p>
                                                </div>
                                                <div class="col-6 text-right">
                                                    <button class="btn create-offer-select-btn">Select Product</button>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-3">
                                                    <img 
                                                        alt="product"
                                                        class="create-offer-product-img"
                                                        src="https://images.unsplash.com/photo-1571942646093-4b0d01d10bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                                <div class="col-9">
                                                    <textarea 
                                                        class="create-offer-description"
                                                        placeholder="Describe Your Offer"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row create-offer-amount-container">
                                                <div class="col-12">
                                                    <div class="row pt-3">
                                                        <div class="col-6 text-left">
                                                            <div>Total Amount</div>
                                                        </div>
                                                        <div class="col-6 text-right">
                                                            <div>$  5000 max</div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-5 pb-3">
                                                        <div class="col-4 text-left">
                                                            <div>Size</div>
                                                        </div>
                                                        <div class="col-8 text-right">
                                                            <div class="create-offer-sizes">
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                                <div class="badge create-offer-size">S</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row create-offer-submit">
                                                <div class="col-6 text-left">
                                                    <a 
                                                        href="#" 
                                                        class="create-offer-back"
                                                        onClick={()=>this.offerBack()}
                                                    >
                                                        <img 
                                                            alt="back"
                                                            class="create-offer-back-icon"
                                                            src={require('../../../../Assets/Icons/CreateOffer/back.svg')}
                                                        />
                                                        Back
                                                    </a>
                                                </div>
                                                <div class="col-6 text-right">
                                                    <button class="btn create-offer-submit-btn">
                                                        Submit Offer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default CreateOffer;