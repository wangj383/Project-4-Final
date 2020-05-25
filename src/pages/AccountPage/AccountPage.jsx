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
        <div className="card cardStyling">
          <div className="card-title" >Trip History <i className="small material-icons" style={{position:'relative', top:"5px"}}>place</i></div>
            <div className="card-content">
            {this.props.requests.map(request=> 
              ((request.driver?request.driver._id===this.props.user._id:false)|| (request.rider[0]?(request.rider[0])._id===this.props.user._id:false))
              ?<><RequestHistory request={request}  key={request._id} user={this.props.user} /></>
              :<></>
              
            )}
            </div>
        </div>
      </div>
    )
  }
};

export default AccountPage;