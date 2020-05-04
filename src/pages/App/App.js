import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import AllRequestsPage from '../AllRequestsPage/AllRequestsPage'
import HomePage from '../HomePage/HomePage'
import AccountPage from '../AccountPage/AccountPage'
import userService from '../../utils/userService'
import NavBar from '../../components/NavBar/NavBar'
import SignUpPage from '../SignUpPage/SignUpPage'
import LoginPage from '../LoginPage/LoginPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sharing on the Road
          <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>
          <Route
            exact path="/signup"
            render={({ history }) => (
              <SignUpPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            )}
          />
          <Route
            exact path="/login"
            render={({history}) => (
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}  />
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
            exact path="/account" 
            render={(props) => (
              userService.getUser() ?
                <AccountPage {...props}/>
              :
                <Redirect to="/login" />
            )} 
          />

          </Switch>
        <footer>
          Copyright ©	2020 Sharing on the Road. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default App;
