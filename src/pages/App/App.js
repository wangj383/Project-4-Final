import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Link  } from 'react-router-dom';
import AllRequestsPage from '../AllRequestsPage/AllRequestsPage'
import HomePage from '../HomePage/HomePage'
import AccountPage from '../AccountPage/AccountPage'
// import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // user: userService.getUser(),
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sharing on the Road
          {/* <NavBar user={this.state.user} /> */}
        </header>
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage {...props}/>
          } />
          <Route exact path="/allrequests" render={(props) =>
            <AllRequestsPage {...props}/>
          } />
          <Route exact path="/account" render={(props) =>
            <AccountPage  {...props}/>
          } />
          </Switch>
        <footer>
          Copyright ©	2020 Sharing on the Road. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default App;
