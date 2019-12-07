import './chat.css';

import React, { Component } from 'react';

import CreateOffer from '../../../Components/SalerDashboard/Chat/createOffer';

class MessageBody extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-12">
                       <div class="card message-body-chat">
                           <div class="card-header message-body-head">
                               Michael Wong
                           </div>
                           <div class="card-body">
                               <div class="container-fluid message-body-chat-scroll">
                                   {/* Message Sent */}
                                   <div class="row">
                                       <div class="col-12">
                                           <div class="row">
                                               <div class="col-12">
                                                    <p class="message-body-sent-time">
                                                        Yesterday, 8:19 PM
                                                    </p>
                                               </div>
                                           </div>
                                           <div class="row">
                                                <div class="col-12 text-left">
                                                    <p class="message-body-sent">
                                                        I thought this would be an awesome way to interact with the interface.
                                                    </p>
                                                </div>
                                           </div>
                                       </div>
                                   </div>
                                   {/* Message Received */}
                                   <div class="row">
                                       <div class="col-12 text-right">
                                           <div class="message-body-receive">
                                            <div class="row">
                                                <div class="col-12">
                                                        <p class="message-body-receive-time">
                                                           Michael Wong, Yesterday, 8:19 PM
                                                        </p>
                                                </div>
                                            </div>
                                               <div class="row">
                                                   <div class="col-12">
                                                        <div class="message-body-profile">
                                                            <div class="message-body-profile-img-active"></div>
                                                        </div>
                                                        <p class="message-body-receive-text">
                                                            I thought this would be an awesome way to interact with the interface.
                                                        </p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   {/* Message Sent */}
                                   <div class="row">
                                       <div class="col-12">
                                           <div class="row">
                                               <div class="col-12">
                                                    <p class="message-body-sent-time">
                                                        Yesterday, 8:19 PM
                                                    </p>
                                               </div>
                                           </div>
                                           <div class="row">
                                                <div class="col-12 text-left">
                                                    <p class="message-body-sent">
                                                        I thought this would be an awesome way to interact with the interface.
                                                    </p>
                                                </div>
                                           </div>
                                       </div>
                                   </div>
                                   {/* Message Received */}
                                   <div class="row">
                                       <div class="col-12 text-right">
                                           <div class="message-body-receive">
                                            <div class="row">
                                                <div class="col-12">
                                                        <p class="message-body-receive-time">
                                                           Michael Wong, Yesterday, 8:19 PM
                                                        </p>
                                                </div>
                                            </div>
                                               <div class="row">
                                                   <div class="col-12">
                                                        <div class="message-body-profile">
                                                            <div class="message-body-profile-img-active"></div>
                                                        </div>
                                                        <p class="message-body-receive-text">
                                                            I thought this would be an awesome way to interact with the interface.
                                                        </p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   {/* Message Sent */}
                                   <div class="row">
                                       <div class="col-12">
                                           <div class="row">
                                               <div class="col-12">
                                                    <p class="message-body-sent-time">
                                                        Yesterday, 8:19 PM
                                                    </p>
                                               </div>
                                           </div>
                                           <div class="row">
                                                <div class="col-12 text-left">
                                                    <p class="message-body-sent">
                                                        I thought this would be an awesome way to interact with the interface.
                                                    </p>
                                                </div>
                                           </div>
                                       </div>
                                   </div>
                                   {/* Message Received */}
                                   <div class="row">
                                       <div class="col-12 text-right">
                                           <div class="message-body-receive">
                                            <div class="row">
                                                <div class="col-12">
                                                        <p class="message-body-receive-time">
                                                           Michael Wong, Yesterday, 8:19 PM
                                                        </p>
                                                </div>
                                            </div>
                                               <div class="row">
                                                   <div class="col-12">
                                                        <div class="message-body-profile">
                                                            <div class="message-body-profile-img-active"></div>
                                                        </div>
                                                        <p class="message-body-receive-text">
                                                            I thought this would be an awesome way to interact with the interface.
                                                        </p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="card-footer message-body-foot">
                               <div class="container-fluid">
                                   <div class="row">
                                       <div class="col-12">
                                        <div class="input-group">
                                                <input type="text" class="form-control message-body-input" placeholder="Message Michael"/>
                                                <div class="input-group-append message-body-create-offer-border">
                                                    <CreateOffer/>
                                                </div>
                                                <div class="input-group-append message-body-send-border">
                                                    <button class="btn message-body-send-btn">
                                                        <img 
                                                            alt="send"
                                                            class="message-body-send-icon"
                                                            src={require('../../../../Assets/Icons/MessageBody/send.svg')}
                                                        />
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
 
export default MessageBody;