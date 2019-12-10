import "./cart.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class CartSummary extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          {/* Title and Step Icons */}
          <div class="row">
            <div class="col-3">
              <div class="cart-heading">Summary</div>
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <div class="row">
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-done">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/cart-orange.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-done">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/van-orange.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-current">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/receipt-white.svg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Summary */}
          <div class="row mt-4">
            {/* Payment Method */}
            <div class="col-5">
              <div class="row">
                <div class="col-12">
                  <div class="cart-summary-heading">Payment method</div>
                </div>
              </div>
              <div class="row" style={{ marginTop: "30px" }}>
                <div class="col text-center">
                  <div class="card cart-summary-payment-container">
                    <div class="card-body">
                      <img
                        alt="paypal-icon"
                        class="cart-summary-payment-paypal-logo"
                        src={require("../../../Assets/Icons/UserShoppingCart/paypal.png")}
                      />
                    </div>
                  </div>
                </div>
                <div class="col text-center">
                  <div class="card cart-summary-payment-container">
                    <div class="card-body">
                      <img
                        alt="paypal-icon"
                        class="cart-summary-payment-visa-logo"
                        src={require("../../../Assets/Icons/UserShoppingCart/visa.svg")}
                      />
                    </div>
                  </div>
                </div>
                <div class="col text-center">
                  <div class="card cart-summary-payment-container">
                    <div class="card-body">
                      <img
                        alt="paypal-icon"
                        class="cart-summary-payment-mastercard-logo"
                        src={require("../../../Assets/Icons/UserShoppingCart/mastercard.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Delivery Method */}
            <div class="col-3">
              <div class="row">
                <div class="col-12">
                  <div class="cart-summary-heading text-center">
                    Delivery method
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="card cart-summary-method-body">
                  <div class="card-body">
                    <div class="container-fluid">
                      <div class="row mt-3">
                        <div class="col-12">
                          <img
                            alt="dpd-logo"
                            class="cart-summary-method-dpd-logo"
                            src={require("../../../Assets/Icons/UserShoppingCart/dpd-logo.png")}
                          />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12 text-center">
                          <div class="cart-summary-method-price">$12.00</div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="cart-summary-cash-on-delivery">
                            Cash on delivery
                          </div>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <Button
                          text="CHANGE"
                          class="cart-summary-cash-on-delviery-change-btn"
                          width="100px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-12">
                  <div class="cart-summary-heading">Delivery method</div>
                </div>
              </div>
              <div class="row cart-summary-address-body">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12">
                      <div class="cart-summary-address-text">
                        Beatrice Waddle
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="cart-summary-address-text">
                        1391 Single Street. Chicago, MA 02129
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="cart-summary-address-text">USA</div>
                    </div>
                    <div class="col-12">
                      <div class="cart-summary-address-text">
                        +5 781-655-3627
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="cart-summary-address-text">
                        BeatriceLWaddle@rhyta.com
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <Link to="/User/Delivery_Address">
                        <Button
                          text="CHANGE ADDRESS"
                          bgColor="#fff"
                          border="1px solid #D8D8D8"
                          width="170px"
                          class="cart-summary-address-btn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Your Cart Display */}
          <div class="row mt-5">
            <div class="col-12">
              <div class="cart-summary-heading">Your cart</div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <table class="table cart-product-table table-borderless">
                {/* <thead>
                                <tr>
                                    <th class="cart-product-table-th">Product</th>
                                    <th class="cart-product-table-th">Color</th>
                                    <th class="cart-product-table-th">Size</th>
                                    <th class="cart-product-table-th text-center">Amount</th>
                                    <th class="cart-product-table-th">Price</th>
                                    <th class="cart-product-table-th"></th>
                                </tr>
                            </thead> */}
                <tbody>
                  {/* Product Details */}
                  <tr>
                    {/* Product Image Product Name Product ID */}
                    <td>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-3">
                            <img
                              alt="product-image"
                              class="cart-product-table-img"
                              src="https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                          </div>
                          <div class="col-9">
                            <div class="row">
                              <div class="col-12">
                                <div class="cart-product-table-product-name">
                                  T-Shirt Summer Vibes
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
                                <div class="cart-product-table-product-id">
                                  #261311
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Product Color */}
                    <td>
                      <div class="cart-product-table-product-color">White</div>
                    </td>
                    {/* Product Size */}
                    <td>
                      <div class="cart-product-table-product-size">XL</div>
                    </td>
                    {/* Product Price */}
                    <td>
                      <div class="cart-product-table-product-price">$89.99</div>
                    </td>
                    {/* Product Quantity */}
                    <td>
                      <div class="cart-summary-your-cart-qty">x1</div>
                    </td>
                  </tr>
                  {/* Product Details */}
                  <tr>
                    {/* Product Image Product Name Product ID */}
                    <td>
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-3">
                            <img
                              alt="product-image"
                              class="cart-product-table-img"
                              src="https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                          </div>
                          <div class="col-9">
                            <div class="row">
                              <div class="col-12">
                                <div class="cart-product-table-product-name">
                                  T-Shirt Summer Vibes
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
                                <div class="cart-product-table-product-id">
                                  #261311
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Product Color */}
                    <td>
                      <div class="cart-product-table-product-color">White</div>
                    </td>
                    {/* Product Size */}
                    <td>
                      <div class="cart-product-table-product-size">XL</div>
                    </td>
                    {/* Product Price */}
                    <td>
                      <div class="cart-product-table-product-price">$89.99</div>
                    </td>
                    {/* Product Quantity */}
                    <td>
                      <div class="cart-summary-your-cart-qty">x1</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-4">
              <div class="container-fluid cart-summary-total-cost-body">
                <div class="row pt-3">
                  <div class="col-6">
                    <div class="cart-summary-total-cost-text">Total cost</div>
                  </div>
                  <div class="col-6">
                    <div class="cart-summary-total-cost-amount">$159.88</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Actions */}
          <div class="row mt-5">
            <div class="col-2">
              <Link to="/User/Delivery_Address">
                <button class="btn cart-delivery-back-btn">
                  <img
                    alt="back"
                    class="cart-delivery-back-icon"
                    src={require("../../../Assets/Icons/UserShoppingCart/back.svg")}
                  />
                  Back
                </button>
              </Link>
            </div>
            <div class="col-6"></div>
            <div class="col-4">
              <div class="row">
                <div class="col-6 text-center">
                  <Link to="/">
                    <Button
                      text="CONTINUE SHOPPING"
                      bgColor="#ffffff"
                      border="1px solid #D8D8D8"
                    />
                  </Link>
                </div>
                <div class="col-6 text-center">
                  <Button
                    text="PROCEED TO PAYMENT"
                    border="1px solid #D8D8D8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartSummary;
