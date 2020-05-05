import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import OrganizationSignupForm from '../../components/OrganizationSignUpForm/OrganizationSignUpForm'
import OrganizationLottie from '../../components/SignupLoginLottie/OrganizationLottie'
import UserLottie from '../../components/SignupLoginLottie/UserLottie'
import './SignUpPage.css';

// import Tabs from 'react-bootstrap/Tabs'

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    };


    render() {
        return (
            
            <div className="SignupPage root-container"> 
                <header className="header-footer">Sign Up</header>
                <div className='lottie'>
                    <UserLottie />
                    <OrganizationLottie />
                </div>
                <div className="box-controller">
                    <button className='buttonstyle' onClick={this.props.showUser.bind(this)}>
                        User
                    </button>
                    <button className='buttonstyle' onClick={this.props.showOrganization.bind(this)}>
                        Organization
                    </button>
                </div>
                {this.props.clickedUser && !this.state.clickedOrganization && !this.state.clickedUser && <SignupForm {...this.props} updateMessage={this.updateMessage} />}
                {this.state.clickedUser && <SignupForm {...this.props} updateMessage={this.updateMessage} />}
                {this.state.clickedOrganization && <OrganizationSignupForm {...this.props} updateMessage={this.updateMessage} />}
                
                <p>{this.state.message}</p>
            </div>
        );
    }
}


export default SignUpPage;
