import React from 'react';
import phone from './phone.jpg'
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = (props) => {
  return(
  <div className='HomePage'>
    <div className="container2">
    <article className="card" id="homearticle">
      <span style={{fontWeight:600}}>Sharide</span> 
      <p> <br />An easy tool to help businesses and large organizations to launch an employee carpool program.</p> 
        {props.user
        ?
          <></>
        :
          <>
          <button  
            className='btn' 
            style={{backgroundColor: "#fb8c00"
            }}>
            <Link to='/signup' className='NavBar-link'>Join Now</Link></button>
          </>
        }
      </article>
      <img src={phone} alt="WebsiteOnPhone" ></img>
    </div>
  </div>
  )
};

export default HomePage;