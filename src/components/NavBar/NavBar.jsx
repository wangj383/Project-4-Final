import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ? (
        <div>
            <Link to="/allrequests" className="NavBar-link">
                Create a Request
            </Link>
            &nbsp;
            <Link to="/allrequests" className="NavBar-link">
                Listed Rides
            </Link>
            &nbsp;
            <span className="NavBar-welcome">Search: </span>
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/account" className="NavBar-link">
                My Account
            </Link>
            &nbsp;
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>
                Log Out
            </Link>     
        </div>
    ) : (
        <div>
            <Link to="/signup" className="NavBar-link">
                Sign Up
            </Link>
            &nbsp;
            <Link to="/login" className="NavBar-link">
                Log In
            </Link>
        </div>
    )

    return (
        <div className="NavBar">
            <Link to="/" className="NavBar-link">
                Home
            </Link>
            &nbsp;
            {nav}
        </div>
    )
}

export default NavBar;