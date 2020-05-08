import React,{Component} from 'react';
import RequestContainer from '../../components/Request/RequestContainer/RequestContainer'
import SearchForm from '../../components/Request/SearchForm/SearchForm'
import requestService from '../../utils/requestService'

class AllRequestsPage extends Component {

  async componentDidMount() {
    const requests = await requestService.getAll();
    this.props.handleAll(requests)
  }
  render() {
    return (
      <div className='allRequestPage'>
        <h1>Listed Requests</h1>
        <SearchForm {...this.props} />
        <RequestContainer {...this.props}/>

      </div>
  )}
};

export default AllRequestsPage;