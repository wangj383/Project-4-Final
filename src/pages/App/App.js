import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import AllRequestsPage from '../AllRequestsPage/AllRequestsPage'
import AccountPage from '../AccountPage/AccountPage'
import OrganizationAccountPage from '../OrganizationAccountPage/OrganizationAccountPage'
import CreateRequestPage from '../CreateRequestPage/CreateRequestPage'
import UpdateRequestPage from '../UpdateRequestPage/UpdateRequestPage'
import SignUpPage from '../SignUpPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService'
import requestService from '../../utils/requestService'
import organizationService from '../../utils/organizationService';

import logo from './logo4.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
      organization: organizationService.getOrg(),
      clickedUser: false,
      clickedOrganization: false,
      requests: [],
    }
  }

  handleAll = requests => {
    this.setState({requests})
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  orghandleLogout = () => {
    organizationService.logout();
    this.setState({ organization: null });
  };

  orghandleSignupOrLogin = () => {
    this.setState({ organization: organizationService.getOrg() });
  };
  showUser() {
    this.setState({clickedUser: true, clickedOrganization: false})
  }

  showOrganization() {
    this.setState({clickedUser: false, clickedOrganization: true})
  }

  handleCreateRequest = async newRequestData => {
    const newRequest = await requestService.create(newRequestData);
    this.setState(state => ({
      requests: [...state.requests, newRequest]
    }),
    () => this.props.history.push('/requests'));
  }

  handleUpdateRequest = async updatedRequestData => {
    const updatedRequest = await requestService.update(updatedRequestData);
    const newRequestsArray = this.state.requests.map(request => 
      request._id === updatedRequest._id ? updatedRequest : request
    );
    this.setState(
      {requests: newRequestsArray},
      () => this.props.history.push('/requests')
    );
  }

  handleDeleteRequest= async id => {
    await requestService.deleteOne(id);
    this.setState(state => ({
      requests: state.requests.filter(request => request._id !== id)
    }), () => this.props.history.push('/requests'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="logo" alt="logo"></img>
        </header>
        <NavBar 
            user={this.state.user} 
            organization={this.state.organization}
            handleLogout={this.handleLogout}
            orghandleLogout={this.orghandleLogout}
          />
        <div className='container'>
          <Switch>
            <Route
              exact path="/signup"
              render={({ history }) => (
                <SignUpPage 
                  history={history} 
                  handleSignupOrLogin={this.handleSignupOrLogin} 
                  orghandleSignupOrLogin={this.orghandleSignupOrLogin} 
                  clickedUser={this.state.clickedUser}
                  clickedOrganization={this.state.clickedOrganization}
                  showOrganization={this.showOrganization}
                  showUser={this.showUser}
                />
              )}
            />
            <Route
              exact path="/login"
              render={({history}) => (
                <LoginPage 
                  history={history} 
                  handleSignupOrLogin={this.handleSignupOrLogin} 
                  orghandleSignupOrLogin={this.orghandleSignupOrLogin}
                  clickedUser={this.state.clickedUser}
                  clickedOrganization={this.state.clickedOrganization}
                  showOrganization={this.showOrganization}
                  showUser={this.showUser}
                />
              )}
            />
            <Route 
              exact path='/' 
              render={(props) => (
                <HomePage {...props}/>
              )} 
            />
            <Route 
              exact path="/requests" 
              render={(props) => (
                userService.getUser() ?
                  <AllRequestsPage {...props} requests={this.state.requests} user={this.state.user} handleAll={this.handleAll} handleDeleteRequest={this.handleDeleteRequest}/>
                :
                  <Redirect to="/login" /> 
              )} 
            />
            <Route 
              exact path="/request/create" 
              render={(props) => (
                userService.getUser() ?
                  <CreateRequestPage {...props} user={this.state.user} handleCreateRequest={this.handleCreateRequest}/>
                :
                  <Redirect to="/login" />
              )} 
            />
            <Route exact path='/request/update' render={({location}) => 
            userService.getUser() ?
              <UpdateRequestPage
                handleUpdateRequest={this.handleUpdateRequest}
                location={location}
              />
              :
                  <Redirect to="/login" />
            } />
            <Route 
              exact path="/account" 
              render={(props) => (
                userService.getUser() ?
                  <AccountPage {...props}/>
                :
                  <Redirect to="/login" />
              )} 
            />
            <Route 
              exact path="/organization/account" 
              render={(props) => (
                organizationService.getOrg() ?
                  <OrganizationAccountPage {...props}/>
                :
                  <Redirect to="/login" />
              )} 
            />
            </Switch>
          </div>
        <footer className="sticky-footer">
          Copyright ©	2020 Sharing on the Road. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default App;
