import "./cart.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../BasicComponents/FormGroup/Buttons/PrimaryButton/primaryButton";

class ShoppingCart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          class="container-fluid"
          style={{ width: "100%", minWidth: "1200px" }}
        >
          <div class="row">
            <div class="col-3">
              <div class="cart-heading">Shopping Cart</div>
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <div class="row">
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-current">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/cart-white.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-next">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/van-grey.svg")}
                    />
                  </div>
                </div>
                <div class="col-3">
                  <hr class="cart-stepper-step-hr" />
                </div>
                <div class="col-2">
                  <div class="cart-stepper-step-round-container-next">
                    <img
                      class="cart-stepper-icon"
                      alt="cart"
                      src={require("../../../Assets/Icons/UserShoppingCart/receipt-grey.svg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Data Table for Products */}
          <div class="row">
            <div class="col-12">
              <table class="table cart-product-table table-borderless">
                <thead>
                  <tr>
                    <th class="cart-product-table-th">Product</th>
                    <th class="cart-product-table-th">Color</th>
                    <th class="cart-product-table-th">Size</th>
                    <th class="cart-product-table-th text-center">Amount</th>
                    <th class="cart-product-table-th">Price</th>
                    <th class="cart-product-table-th"></th>
                  </tr>
                </thead>
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
                    {/* Product Amount */}
                    <td>
                      <div class="container-fluid text-center cart-product-table-product-amount-container">
                        <div class="row">
                          <div class="float-left text-center">
                            <button class="btn cart-product-table-product-amount-btn">
                              <img
                                alt="minus"
                                class="cart-product-table-product-amount-btn-icon"
                                src={require("../../../Assets/Icons/UserShoppingCart/minus.svg")}
                              />
                            </button>
                          </div>
                          <div class="text-center">
                            <h5 class="mt-2 ml-1">1</h5>
                          </div>
                          <div class="float-right">
                            <button class="btn cart-product-table-product-amount-btn">
                              <img
                                alt="minus"
                                class="cart-product-table-product-amount-btn-icon"
                                src={require("../../../Assets/Icons/UserShoppingCart/add.svg")}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Product Price */}
                    <td>
                      <div class="cart-product-table-product-price">$89.99</div>
                    </td>
                    {/* Product Remove */}
                    <td>
                      <img
                        alt="rmove"
                        class="cart-product-table-product-remove"
                        src={require("../../../Assets/Icons/UserShoppingCart/close.svg")}
                      />
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
                    {/* Product Amount */}
                    <td>
                      <div class="container-fluid text-center cart-product-table-product-amount-container">
                        <div class="row">
                          <div class="float-left text-center">
                            <button class="btn cart-product-table-product-amount-btn">
                              <img
                                alt="minus"
                                class="cart-product-table-product-amount-btn-icon"
                                src={require("../../../Assets/Icons/UserShoppingCart/minus.svg")}
                              />
                            </button>
                          </div>
                          <div class="text-center">
                            <h5 class="mt-2 ml-1">1</h5>
                          </div>
                          <div class="float-right">
                            <button class="btn cart-product-table-product-amount-btn">
                              <img
                                alt="minus"
                                class="cart-product-table-product-amount-btn-icon"
                                src={require("../../../Assets/Icons/UserShoppingCart/add.svg")}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Product Price */}
                    <td>
                      <div class="cart-product-table-product-price">$89.99</div>
                    </td>
                    {/* Product Remove */}
                    <td>
                      <img
                        alt="rmove"
                        class="cart-product-table-product-remove"
                        src={require("../../../Assets/Icons/UserShoppingCart/close.svg")}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Bottom */}
          <div class="row mt-4">
            <div class="col-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control cart-product-promo-code"
                  placeholder="Promo Code"
                />
                <div class="input-group-prepend">
                  <span class="input-group-text cart-product-promo-code-icon">
                    <img
                      alt="navigation"
                      class="cart-product-promo-code-img"
                      src={require("../../../Assets/Icons/UserShoppingCart/navigation.svg")}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="col-5 text-center mt-1">
              <div>
                <span class="cart-product-total-cost-title">Total cost:</span>{" "}
                <span class="cart-product-total-cost">$159.88</span>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-8 text-center">
                  <Link to="/">
                    <Button
                      text="CONTINUE SHOPPING"
                      bgColor="#ffffff"
                      border="1px solid #D8D8D8"
                      width="70%"
                    />
                  </Link>
                </div>
                <div class="col-4 text-center">
                  <Link to="/User/Delivery_Address">
                    <Button text="NEXT STEP" border="1px solid #D8D8D8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
