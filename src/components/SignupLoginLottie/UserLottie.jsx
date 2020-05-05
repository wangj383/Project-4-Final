import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../lotties/signup_login_user.json'
import './lottie.css'

class UserLottie extends Component {
  state = {isStopped: false, isPaused: false}

  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="user">
        <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}

export default UserLottie;