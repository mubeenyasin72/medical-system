import './profileInfo.css';

import React, { Component } from 'react';

class UserProfileInfo extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    {/* <div class="col-1"></div> */}
                    <div class="col-12">
                        <div class="card w-100">
                            <div class="card-body user-profile-info-profile-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="row">
                                                <div class="col-12 text-center">
                                                    <img 
                                                        alt="profile"
                                                        class="user-profile-info-profile-img"
                                                        src="https://images.unsplash.com/photo-1575489179793-5b61fd8ac0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                                    />
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <label
                                                    for="upload-profile"
                                                    class="btn user-profile-info-profile-img-upload-btn"
                                                >
                                                    Upload Picture
                                                </label>
                                                <input 
                                                    type="file"
                                                    id="upload-profile"
                                                    hidden
                                                />
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="user-name" class="user-profile-info-label-text-top">Name</label>
                                                        <input 
                                                            id="user-name" 
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Enter name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button
                                                        class="btn user-profile-info-edit-btn"
                                                    >
                                                        Edit Profile
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="user-email" class="user-profile-info-label-text-top">Email</label>
                                                        <input 
                                                            id="user-email" 
                                                            type="email"
                                                            class="form-control"
                                                            placeholder="Enter email address"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-3 text-center">
                                            <div class="user-profile-info-label-text-bottom">Birth Date</div>
                                        </div>
                                        <div class="col-9">
                                            <input 
                                                type="date"
                                                class="form-control"
                                                max="3000-12-31"
                                                min="1000-12-31"
                                                value="2004-12-12"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-3 text-center">
                                            <div class="user-profile-info-label-text-bottom">Phone Number</div>
                                        </div>
                                        <div class="col-9">
                                            <input 
                                                type="text"
                                                class="form-control"
                                                placeholder="0000-000-000-0000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-1"></div> */}
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default UserProfileInfo;