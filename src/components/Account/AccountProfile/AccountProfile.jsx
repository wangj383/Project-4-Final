import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountProfile extends Component {
    render() {
        return(
            <div className='AccountProfile'>
                <div className='card cardStyling' >
                    <div className="card-title">Profile <i className="small material-icons" style={{position:'relative', top:"5px"}}>person</i></div>
                    <div className="card-content">
                        <p>Name: {this.props.user.name}</p>
                        <p>Gender: {this.props.user.gender}</p>
                        <p>Employee ID: {this.props.user.employee_id}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Phone Number: {this.props.user.phoneNum}</p>
                        <>{this.props.user.car.make
                        ?
                            <>
                                <ul className="list-group"><p>Car Information: </p>
                                    <li className="list-group-item">Make and Model: {this.props.user.car.make} {this.props.user.car.model}</li>
                                    <li className="list-group-item">Plate Number: {this.props.user.car.licencePlate}</li>
                                    <li className="list-group-item">Color: {this.props.user.car.color}</li>
                                    <li className="list-group-item">Max number of passengers: {this.props.user.car.passengerCapacity}</li>
                                </ul>
                            </>
                        :
                            <></>
                        }
                        </>
                   
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountProfile