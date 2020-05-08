import React, { Component } from 'react';


class RequestHistory extends Component {
    render() {
        return(
            <div className='RequestHistory'>
                <div className="card cardStyling">
                    <div className="card-title">Trip History <i class="small material-icons" style={{position:'relative', top:"5px"}}>place</i></div>
                    <div className="card-content">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                Collapsible Group 1</a>
                            </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                            <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.</div>
                            </div>
                        </div>
 
                    </div>
                </div>                 
            </div>
            </div>
        )
    }
}

export default RequestHistory