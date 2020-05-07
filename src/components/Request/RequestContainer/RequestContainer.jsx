import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RequestPost from '../RequestPost/RequestPost'

class RequestContainer extends Component {
   
    render() {
        return (
            <div className="RequestContainer card-group">
                {this.props.requests.map(request => 
                    <RequestPost request={request} key={request._id} user={this.props.user}/>
                )}
            </div>
        )
    }
}

export default RequestContainer