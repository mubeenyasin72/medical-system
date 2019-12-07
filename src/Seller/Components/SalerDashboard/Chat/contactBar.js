import './chat.css';

import React, { Component } from 'react';

class ContactBar extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <div class="container-fluid bg-chat-bar mb-2 mt-2">
                <div class="row">
                    <div class="col-3">
                        <div class="chat-bar-profile">
                            <div class="chat-bar-profile-img-active"></div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="row">
                            <h5 class="chat-bar-name">Usman</h5>  
                        </div>
                        <div class="row">
                            <p class="chat-bar-latest-msg">Latest message</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col-12">
                                <img 
                                    alt="more"
                                    src={require('../../../../Assets/Icons/Chat/more.svg')}
                                    class="chat-bar-more"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="chat-bbar-time">
                                    7:47 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default ContactBar;