import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function RequestPost({request, handleDeleteRequest}) { 
        return(
            <div className='card'>
                <div className="card-content">        
                    <div className='card-content'>
                        <span className='card-title'>{request.title}</span>
                        <p>Requested by: </p>
                        <p>Pick Up Address: </p>
                        <p>Pick Up Time: </p>
                        <p>Destination Address: </p>
                    </div>
                    <div className='card-action '>
                        <Link
                            className='btn btn-xs btn-warning'
                            to={{
                            pathname: '/request/update',
                            state: {request}
                            }}
                        >
                            EDIT
                        </Link>
                        <button
                            className='btn btn-xs btn-danger margin-left-10'
                            onClick={() => handleDeleteRequest(request._id)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
          </div>
        )
}

export default RequestPost