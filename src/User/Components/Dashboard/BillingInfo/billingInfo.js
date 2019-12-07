import "./billingInfo.css";

import React, { Component } from "react";

class UserBillingInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            {/* <div class="col-1"></div> */}
            <div class="col-12">
              <div class="card w-100">
                <div class="card-body user-billing-info-profile-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-5">
                            <div class="form-group">
                              <label
                                for="user-city"
                                class="user-billing-info-label-text-top"
                              >
                                City
                              </label>
                              <input
                                id="user-city"
                                type="text"
                                class="form-control"
                                placeholder="Enter city"
                              />
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="form-group">
                              <label
                                for="user-state"
                                class="user-billing-info-label-text-top"
                              >
                                State
                              </label>
                              <input
                                id="user-state"
                                type="text"
                                class="form-control"
                                placeholder="Enter state"
                              />
                            </div>
                          </div>
                          <div class="col-2">
                            {/* <button class="btn user-billing-info-edit-btn">
                              Edit Profile
                            </button> */}
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-5">
                            <div class="form-group">
                              <label
                                for="user-postal-code"
                                class="user-billing-info-label-text-top"
                              >
                                Postal Code
                              </label>
                              <input
                                id="user-postal-code"
                                type="text"
                                class="form-control"
                                placeholder="Enter city postal code"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-10">
                            <div class="form-group">
                              <label
                                for="user-address-1"
                                class="user-billing-info-label-text-top"
                              >
                                Address 1
                              </label>
                              <textarea
                                id="user-address-1"
                                type="text"
                                class="form-control"
                                placeholder="Enter Address 1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-10">
                            <div class="form-group">
                              <label
                                for="user-address-2"
                                class="user-billing-info-label-text-top"
                              >
                                Address 2
                              </label>
                              <textarea
                                id="user-address-2"
                                type="text"
                                class="form-control"
                                placeholder="Enter Address 2"
                              />
                            </div>
                          </div>
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

export default UserBillingInfo;
