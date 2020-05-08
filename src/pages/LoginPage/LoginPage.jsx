import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import organizationService from '../../utils/organizationService'
import OrganizationLottie from '../../components/SignupLoginLottie/OrganizationLottie'
import UserLottie from '../../components/SignupLoginLottie/UserLottie'

class LoginPage extends Component {

    state = {
        email: '',
        pw: '',
        organizations:[],
    };

    async componentDidMount() {
        const organizations = await organizationService.getAll()
        this.setState({organizations})
    }

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
                <h1>Choose Account Type</h1>
                <div className='lottiee'>
                    <div >
                        <div className='img1' onClick={this.props.showUser.bind(this)}><UserLottie {...this.props} /></div>   
                    </div>
                    <div>
                    <div className='img2' onClick={this.props.showOrganization.bind(this)}><OrganizationLottie {...this.props}/></div>
                    </div>
                </div>
                <div className="box-controller">
                    {this.state.clickedUser?(
                    <>
                    <h1>User</h1>
                    <form className="form-horizontal" autoComplete="off" onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <div className="col-sm-14">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group" >
                            <div className="col-sm-14 text-center" style={{marginTop:"5%"}}>
                            <button className="btn btn-default" style={{marginTop:"0"}}>Log In</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/' >Cancel</Link>
                            </div>
                        </div>
                    </form>
                    </>
                    ):(<></>)}
                    {this.state.clickedOrganization?(
                    <>
                    <h1>Organization</h1>
                    <form className="form-horizontal" onSubmit={this.orghandleSubmit} >
                        <div className="form-group">
                            <div className="col-sm-14">
                            <input type="email" className="form-control" placeholder="Organization Email" value={this.state.email} name="email" onChange={this.orghandleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.orghandleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-14 text-center" style={{marginTop:"5%"}}>
                            <button className="btn btn-default" style={{marginTop:"0"}} >Log In</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                    </>
                    ):<></>}
                    
                </div>
        </div>
        );
    }
}

export default LoginPage;
