import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import organizationService from '../../utils/organizationService';

class OrganizationSignupForm extends Component {
    state = {
        name: '',
        email: '',
        phoneNum: '',
        address: '',
        password: '',
        passwordConf: '',
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await organizationService.signup(this.state);
            this.props.orghandleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    };

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
                <h1>Organization</h1>
                <br />
                <form className="form-horizontal" onSubmit={this.handleSubmit}>      
                    <div className="form-group">
                        <div className="col-sm-14">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Organization Name"
                                value={this.state.name}
                                name="name"
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
                        <div className="col-sm-14 text-center space" style={{marginTop:"5%"}}>
                            <button className="btn btn-default" style={{marginTop:"0"}} disabled={this.isFormInvalid()}>
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

export default OrganizationSignupForm;
