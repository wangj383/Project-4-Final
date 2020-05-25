import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import {Dropdown} from 'semantic-ui-react'
import './SignupForm.css'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organization: "",
            name: '',
            employee_id: '',
            gender: '',
            email: '',
            phoneNum: '',
            password: '',
            passwordConf: '',
            driver:false,
            car: {
                model:"",
                make:"",
                year:undefined,
                color:"",
                passengerCapacity:undefined,
            }
        }
    }
   
    orgOption() {
        let arr=[]
        this.props.organizations.forEach((org,idx) => {
            arr.push({
                key: idx,
                text: org.name,
                value: org._id
                })
        })
        return arr
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleDriverChange = (event) =>{
        this.setState({
            driver: event.target.checked
        })
    }

    handleCarChange =(event) => {
        this.setState({
            car: {...this.state.car,[event.target.name]:event.target.value }
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/login');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }
    orghandleChange = (e, {value}) => {
        this.setState({
            organization: value
           
        })
    }

    isFormInvalid() {
        return !(
            this.state.name &&
            this.state.email &&
            this.state.password === this.state.passwordConf
        );
    }


    render() {
        return (
            <div>
                <h1>User</h1>
                <br />
                <form className="form-horizontal" autoComplete="off" onSubmit={this.handleSubmit}>  
                    <div className="form-group">
                        <div className="col-sm-14">
                            <Dropdown
                                placeholder="Select Organization"
                                fluid
                                search
                                selection
                                options={this.orgOption()}
                                value={this.state.value}
                                name='organization'
                                onChange={this.orghandleChange}
                            />
                        </div>
                    </div>    
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name *"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Employee ID"
                                value={this.state.employee_id}
                                name="employee_id"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>                   
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Gender"
                                value={this.state.gender}
                                name="gender"
                                onChange={this.handleChange}
                                
                            />
                        </div>
                    </div>                     
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                value={this.state.phoneNum}
                                name="phoneNum"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={this.state.passwordConf}
                                name="passwordConf"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div> 
                    <div className="form-group">
                        <div className="col-sm-14">
                            <label>
                            <input
                                type="checkbox"
                                checked={this.state.driver}
                                name="driver"
                                onChange={this.handleDriverChange}
                            />
                            <span style={{fontSize:'18px'}}>Want to be a driver? </span>
                            </label>
                        </div>
                    </div>

                    {this.state.driver
                    ?
                    <div className="transition">
                        <div className="form-group">
                            <div className="col-sm-14">
                                <label style={{fontSize:'18px', marginTop:"5%"}}>Please Enter Your Car Information:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Make"
                                    value={this.state.car.make}
                                    name="make"
                                    onChange={this.handleCarChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Model"
                                    value={this.state.car.model}
                                    name="model"
                                    onChange={this.handleCarChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-14">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Plate Number"
                                    value={this.state.car.licencePlate}
                                    name="licencePlate"
                                    onChange={this.handleCarChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Color"
                                    value={this.state.car.color}
                                    name="color"
                                    onChange={this.handleCarChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Maximum Passenger Capacity"
                                    value={this.state.car.passengerCapacity}
                                    name="passengerCapacity"
                                    onChange={this.handleCarChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    :
                        <></>
                    }
                    <div className="form-group">
                        <div className="col-sm-14 text-center space" style={{marginTop:"5%"}}>
                            <button className="btn btn-default waves-effect waves-light" style={{marginTop:"0"}} disabled={this.isFormInvalid()}>
                                Sign Up
                            </button>
                            &nbsp;&nbsp;
                            <Link to="/" >Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
