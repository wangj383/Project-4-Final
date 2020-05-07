import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ? (
        <ul className="navtab">
            <li><Link to="/request/create" className="NavBar-link">
                Create a Request
            </Link></li>
            &nbsp;
            <li><Link to="/requests" className="NavBar-link">
                Listed Requests
            </Link></li>
            &nbsp;
            <li><Link to="/account" className="NavBar-link">
                My Account
            </Link></li>
            &nbsp;
            <li><Link to="" className="NavBar-link" onClick={props.handleLogout}>
                Log Out
            </Link></li>     
        </ul>
    ) :  (props.organization ? (
            <ul className="navtab">
                <li><Link to="/organization/account" className="NavBar-link">
                    Organization Account
                </Link></li>
                &nbsp;
                <li><Link to="" className="NavBar-link" onClick={props.orghandleLogout}>
                    Log Out
                </Link></li>   
            </ul>
        ):(
            <ul className="navtab"  >
                <li  ><Link to="/signup" className="NavBar-link">
                    Sign Up
                </Link ></li>
                &nbsp;
                <li ><Link to="/login"className="NavBar-link" >
                    Log In
                </Link></li>
            </ul>
        )
    )

    return (
        <div className="NavBar" style={{textDecoration:"none"}}>
            <ul className="navtab">
                <li>
                <Link to="/" className="NavBar-link">
                    Home
                </Link>
                </li>
            </ul>
            {nav}
        </div>
    )
}

export default NavBar;