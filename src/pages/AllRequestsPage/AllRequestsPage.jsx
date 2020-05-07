import React from 'react';
import RequestContainer from '../../components/Request/RequestContainer/RequestContainer'
import SearchForm from '../../components/Request/SearchForm/SearchForm'

const AllRequestsPage = (props) => {
  return (
    <div className='allRequestPage'>
      <h1>Listed Requests</h1>
      <SearchForm {...props} />
      <RequestContainer {...props}/>

    </div>
  )
};

export default AllRequestsPage;