import React from 'react';
import CreateForm from '../../components/Request/CreateForm/CreateForm'
import LocationLottie from '../../components/Request/RequestLottie/LocationLottie'
import OnboardingCar from '../../components/Request/RequestLottie/OnboardingCar';
import './CreateRequestPage.css'

const CreateRequestPage = (props) => {
  return (
    <div className='CreateRequestPages'>
      <h1>Create a Ride Request</h1>
      <div className="inner">
        <div className='lottie'>
            <OnboardingCar />
        </div>
        <CreateForm {...props}/>

      </div>
    </div>
  )
};

export default CreateRequestPage;