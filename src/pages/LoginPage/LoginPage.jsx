import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import organizationService from '../../utils/organizationService'

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }


    handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/requests');
    } catch (err) {
        alert('Invalid Credentials')
    }
    };

    orghandleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }


    orghandleSubmit = async (e) => {
    e.preventDefault();
    try {
        await organizationService.login(this.state);
        this.props.orghandleSignupOrLogin();
        this.props.history.push('/');
    } catch (err) {
        alert('Invalid Credentials')
    }
    };


    render() {
        return (
        <div className="LoginPage">
            <header className="header-footer">Log In</header>
                <form className="form-horizontal" autoComplete="off" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                        <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
                <form className="form-horizontal" onSubmit={this.orghandleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" className="form-control" placeholder="Organization Email" value={this.state.email} name="email" onChange={this.orghandleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.orghandleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                        <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
        </div>
        );
    }
}

export default LoginPage;
