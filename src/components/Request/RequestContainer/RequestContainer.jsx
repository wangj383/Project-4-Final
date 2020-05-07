import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RequestPost from '../RequestPost/RequestPost'
import LoadingPage from '../LoadingPage/LoadingPage'
import './RequestContainer.css'
class RequestContainer extends Component {
   
    render() {
        return (
            <div className="RequestContainer">
                {this.props.requests.length===0 ? <LoadingPage />:this.props.requests.map(request => 
                    request.organization._id===this.props.user.organization
                    ?<RequestPost request={request} key={request._id} user={this.props.user}/>
                    : <></>

                )}
                <div><hr />You have reached to the end of the list. If you have not found a suitable post, you can create your own request!</div>
            </div>
        )
    }
}

export default RequestContainer