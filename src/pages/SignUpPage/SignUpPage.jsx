import React, { Component } from 'react';
import organizationService from '../../utils/organizationService';
import SignupForm from '../../components/SignupForm/SignupForm';
import OrganizationSignupForm from '../../components/OrganizationSignUpForm/OrganizationSignUpForm'
import OrganizationLottie from '../../components/SignupLoginLottie/OrganizationLottie'
import UserLottie from '../../components/SignupLoginLottie/UserLottie'
import './SignUpPage.css';

// import Tabs from 'react-bootstrap/Tabs'

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '', organizations:[],title:"Choose Account Type"};
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    };
    
    async componentDidMount() {
        const organizations = await organizationService.getAll()
        this.setState({organizations})
    }

    render() {
        return (
            
            <div className="SignupPage root-container"> 
                <header className="header-footer">Sign Up</header>
                <h1>{this.state.title}</h1>
                <div className='lottie'>
                    <section onClick={this.props.showUser.bind(this)}>
                        <UserLottie />   
                        <button 
                            className='buttonstyle' 
                            onClick={this.props.showUser.bind(this)}>
                            User
                        </button>
                    </section>
                    <section onClick={this.props.showOrganization.bind(this)}>
                        <OrganizationLottie/>
                        <button 
                        className='buttonstyle' id="orgbutton"
                        onClick={this.props.showOrganization.bind(this)}>
                        Organization
                    </button>
                    </section>
                </div>
                
                <div className="box-controller">
                </div>
                <div className='form'>
                    {this.state.clickedUser 
                        && <SignupForm 
                            {...this.props} 
                            organizations={this.state.organizations} 
                            updateMessage={this.updateMessage} 
                        />}
                    {this.state.clickedOrganization 
                        && <OrganizationSignupForm 
                            {...this.props} 
                            updateMessage={this.updateMessage} 
                        />}
                    
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }
}


export default SignUpPage;
