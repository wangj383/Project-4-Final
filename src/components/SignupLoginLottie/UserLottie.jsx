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
      <section>
        <div className="user">
          <Lottie options={defaultOptions}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
          />
        </div>
        <button 
            className='buttonstyle waves-effect waves-light' 
            onClick={this.props.showUser.bind(this)}>
            User
        </button>
      </section>

    )
  }
}

export default UserLottie;