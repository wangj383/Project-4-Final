import React, {Component} from 'react';
import AccountProfile from '../../components/Account/AccountProfile/AccountProfile'
import RequestHistory from '../../components/Account/RequestHistory/RequestHistory'
import requestService from '../../utils/requestService'
import './AccountPage.css'

class AccountPage extends Component {
  // NEED to change the request.rider.id==this.props.user._id later!! to forEach function 
  async componentDidMount() {
    const requests = await requestService.getAll();
    this.props.handleAll(requests)

  }
  
  render() {
    return(
      <div>
        <h1>{this.props.user.name}'s Account</h1>
        <AccountProfile {...this.props}/>

      </div>
    )
  }
};

export default AccountPage;