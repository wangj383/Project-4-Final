import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../lotties/signup_login_organization.json'


class OrganizationLottie extends Component {
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
      <section className='orgsec'>
      <div className="organization">
        <Lottie options={defaultOptions}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
      </div>
      <button 
          className='buttonstyle waves-effect waves-light' 
          onClick={this.props.showOrganization.bind(this)}>
          Organization
      </button>
      </section>
      )
  }
}

export default OrganizationLottie;

// <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>Stop</button>
// <button style={buttonStyle} onClick={() => this.setState({isStopped: false, isPaused: false })}>Play</button>
// <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button>