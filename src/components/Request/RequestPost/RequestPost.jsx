import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RequestPost.css'

function RequestPost({request, handleDeleteRequest, user}) { 
        return(
            <div className='card'>
                <div className="card-content">        
                    {request.urgent? <div className="card-title " > <span className="urgent">Urgent</span>  {request.title}</div>:<div className="card-title"> {request.title}</div>}
                        <p>Requested by: {request.host.name}</p>
                        <p>Pick Up Address: {request.pickUpAddress}</p>
                        <p>Pick Up Time: {request.pickUpTime}</p>
                        <p>Destination Address: {request.destinationAddress} </p>
                        <p>Driver: {request.driver? request.driver.name:<>None</>}</p>
                        <p>Rider: {request.rider.length? request.rider.map(rider => rider.name):<>None</>} </p>
                        {request.notes? <p>Additional Notes: {request.notes}</p> :<></>}
                </div>
                
                <div className='card-action '>
                    {request.host._id === user._id
                    ?(
                        <>
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
                        </>
                    ):(
                        <button
                            className='btn btn-xs btn-danger margin-left-10'
                        >
                            Join as a {request.driver? <>rider</> : <>driver</>}!
                        </button>
                    
                    )}
                </div>
                  
          </div>
        )
}

export default RequestPost