import React, { Component } from 'react';


class RequestHistory extends Component {
    render() {
        return(
            <div className='RequestHistory'>
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" style={{fontSize:'20px'}}>
                                {this.props.request.title}</a>
                            </h4>
                            </div>
                                <div id="collapse1" className="panel-collapse collapse in">
                                    <div className="panel-body"  style={{fontSize:'16px'}}>
                                        <p>Host name: {this.props.request.host.name}</p>
                                        <p>Driver name:{this.props.request.driver.name}</p>
                                        <p>Pick up address: {this.props.request.pickUpAddress}</p>
                                        <p>Pick up time: {this.props.request.pickUpTime}</p>
                                        <p>Destination address: {this.props.request.destinationAddress} </p>
                                        <p>Driver: {this.props.request.driver? this.props.request.driver.name:<>None</>}</p>
                                        <p>Rider: {this.props.request.rider.length? this.props.request.rider.map(rider => rider.name):<>None</>} </p>
                                        {this.props.request.notes? <p>Additional notes: {this.props.request.notes}</p> :<></>}
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                            
            </div>
        )
    }
}

export default RequestHistory