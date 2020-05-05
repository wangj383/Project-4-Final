import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import AllRequestsPage from '../AllRequestsPage/AllRequestsPage'
import AccountPage from '../AccountPage/AccountPage'
import OrganizationAccountPage from '../OrganizationAccountPage/OrganizationAccountPage'

import SignUpPage from '../SignUpPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService'
import organizationService from '../../utils/organizationService';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
      organization: organizationService.getOrg(),
      clickedUser: true,
      clickedOrganization: false
    }
  }
  showUser() {
    this.setState({clickedUser: true, clickedOrganization: false})
  }

  showOrganization() {
    this.setState({clickedUser: false, clickedOrganization: true})
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sharing on the Road
          <NavBar 
            user={this.state.user} 
            organization={this.state.organization}
            handleLogout={this.handleLogout}
            orghandleLogout={this.orghandleLogout}
          />
        </header>
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
            exact path="/allrequests" 
            render={(props) => (
              userService.getUser() ?
                <AllRequestsPage {...props}/>
              :
                <Redirect to="/login" />
            )} 
          />
          <Route 
            exact path="account" 
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
        <footer className="sticky-footer">
          Copyright ©	2020 Sharing on the Road. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default App;
