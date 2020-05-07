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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
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
                        <div className="col-sm-12">
                            <label class="hover" style={{fontSize:'20px'}}>
                                Want to be a driver? &nbsp;
                            <input
                                type="checkbox"
                                checked={this.state.driver}
                                name="driver"
                                onChange={this.handleDriverChange}
                                style={{opacity:'1',transform: 'scale(2)'}}
                            />
                            </label>
                        </div>
                    </div>           
                    <div className="form-group">
                        <div className="col-sm-12 text-center space">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>
                                Sign Up
                            </button>
                            &nbsp;&nbsp;
                            <button className="cancel"><Link to="/" >Cancel</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
