import React from 'react';
import phone from './phone.jpg'
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = (props) => {
  return(
  <div className='HomePage'>
    <div className="container">
    <p className="card"><span className='card-header'>Carpooling with Colleagues </span>
    <br />
       A great way to save commuting costs while expanding social connections</p>
    <img src={phone} alt="WebsiteOnPhone" ></img>
    <div><button><Link to='/signup' className='NavBar-link'>Join Now</Link></button></div>
    </div>
  </div>
  )
};

export default HomePage;