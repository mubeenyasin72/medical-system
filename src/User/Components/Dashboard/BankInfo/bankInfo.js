import "./bankInfo.css";

import React, { Component } from "react";

class UserBankOnfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            {/* <div class="col-1"></div> */}
            <div class="col-12">
              {/* Bank Info Or Card Info */}
              <div class="card w-100">
                <div class="card-body user-bank-info-profile-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        {/* Visa & Master Card || Paypal Info */}
                        <div class="row">
                          <div class="col-3"></div>
                          <div class="col-6">
                            <div class="row">
                              {/* Visa Card & Master Card */}
                              <div class="col-6">
                                <div class="card user-bank-info-visa-card-body">
                                  <div class="card-body">
                                    <div class="container-fluid">
                                      <div class="row">
                                        <div class="col-12">
                                          <div class="user-bank-info-card-title">
                                            Card
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row user-bank-info-card-icons">
                                        <div class="col-6">
                                          <img
                                            alt="visa"
                                            class="user-bank-info-card-visa-icon"
                                            src={require("../../../../Assets/Icons/UserBankInfo/visa.svg")}
                                          />
                                        </div>
                                        <div class="col-6">
                                          <img
                                            alt="visa"
                                            class="user-bank-info-card-master-icon"
                                            src={require("../../../../Assets/Icons/UserBankInfo/mastercard.svg")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Paypal */}
                              <div class="col-6">
                                <div class="card user-bank-info-paypal-body">
                                  <div class="card-body">
                                    <div class="container-fluid">
                                      <div class="row">
                                        <div class="col-12">
                                          <div class="user-bank-info-card-title">
                                            Paypal
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row user-bank-info-paypal-icons">
                                        <div class="col-3">
                                          <img
                                            alt="visa"
                                            class="user-bank-info-paypal-icon"
                                            src={require("../../../../Assets/Icons/UserBankInfo/paypal-logo.svg")}
                                          />
                                        </div>
                                        <div class="col-9">
                                          <img
                                            alt="visa"
                                            class="user-bank-info-paypal-text"
                                            src={require("../../../../Assets/Icons/UserBankInfo/paypal-text.svg")}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3"></div>
                        </div>
                        {/* Debit Card Info Submit */}
                        <div class="row">
                          <div class="col-1"></div>
                          <div class="col-10">
                            <div class="row mt-5">
                              {/* Card Data */}
                              <div class="col-6">
                                <div class="card user-bank-info-card-info-body">
                                  <div class="card-body">
                                    <div class="container-fluid">
                                      <div class="row pt-4">
                                        <div class="col-12">
                                          <div class="form-group">
                                            <label
                                              for="card-number"
                                              class="user-bank-info-card-info-input-label"
                                            >
                                              CARD NUMBER
                                            </label>
                                            <input
                                              id="card-number"
                                              type="text"
                                              placeholder="0000 0000 0000 0000"
                                              class="form-control user-bank-info-card-info-input"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-5">
                                          <div class="form-group">
                                            <label
                                              for="card-name"
                                              class="user-bank-info-card-info-input-label"
                                            >
                                              CARD NUMBER
                                            </label>
                                            <input
                                              id="card-name"
                                              type="text"
                                              placeholder="NAME HERE"
                                              class="form-control user-bank-info-card-info-input"
                                            />
                                          </div>
                                        </div>
                                        <div class="col-7">
                                          <div class="form-group">
                                            <label
                                              for="card-date"
                                              class="user-bank-info-card-info-input-label"
                                            >
                                              EXPIRES
                                            </label>
                                            <input
                                              id="card-date"
                                              type="date"
                                              placeholder="NAME HERE"
                                              class="form-control user-bank-info-card-info-input"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* CVV Info */}
                              <div class="col-6">
                                <div class="card user-bank-info-card-info-body">
                                  <div class="card-body">
                                    <div class="container-fluid">
                                      <div class="row user-bank-info-card-cvv-empty-row"></div>
                                      <div class="row">
                                        <div class="col-8"> </div>
                                        <div class="col-4">
                                          <div class="form-group">
                                            <label
                                              for="card-date"
                                              class="user-bank-info-card-info-input-label float-left"
                                            >
                                              CVV
                                            </label>
                                            <input
                                              id="card-date"
                                              type="text"
                                              placeholder="000"
                                              class="form-control user-bank-info-card-info-input"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Save Card and Confirm */}
                            <div class="row">
                              <div class="col-12">
                                <div class="row mt-3">
                                  <div class="col-12">
                                    <div class="form-check">
                                      <label class="form-check-label">
                                        <input
                                          type="checkbox"
                                          class="form-check-input bg-white"
                                          value=""
                                        />
                                        Save this card
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row mt-3">
                                  <div class="col-12">
                                    <button class="btn user-bank-info-card-info-btn">
                                      Confirm
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-1"></div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserBankOnfo;
