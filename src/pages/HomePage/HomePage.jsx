import React from 'react';
import phone from './phone.jpg'
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = (props) => {
  return(
  <div className='HomePage'>

    <p><span>Carpooling with Colleagues </span><br />
        A great way to save commuting costs while expanding social connections</p>
    <img src={phone} alt="WebsiteOnPhone" ></img>
    <button><Link to='/signup' className='NavBar-link'>Join Now</Link></button>
  </div>
  )
};

export default HomePage;