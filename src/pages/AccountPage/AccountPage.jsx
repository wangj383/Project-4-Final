import React from 'react';
import AccountProfile from '../../components/Account/AccountProfile/AccountProfile'

const AccountPage = (props) => {
  return(
    <div>
      <h1>{props.user.name}'s Profile</h1>
      <AccountProfile {...props}/>
    </div>
  )
};

export default AccountPage;