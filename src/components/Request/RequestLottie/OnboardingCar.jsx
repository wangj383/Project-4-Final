import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../lotties/onboarding-car'


class OnboardingCar extends Component {
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
      <div className="location">
        <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}

export default OnboardingCar;

// <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>Stop</button>
// <button style={buttonStyle} onClick={() => this.setState({isStopped: false, isPaused: false })}>Play</button>
// <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button>