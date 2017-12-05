import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loginStatus: null,
      user: null
    }
  }

  loginSucceed (user) {
    this.props.changeLoginStatus('connected')
    this.props.changeUser(user)
  }

  loginFailed (response) {
    this.props.changeLoginStatus(response.status)
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId="521415314884327"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.loginSucceed.bind(this)}
          onFailure={this.loginFailed.bind(this)} />
      </div>
    )
  }
}

Login.propTypes = {
  changeLoginStatus: PropTypes.function,
  changeUser: PropTypes.function
}

export default Login
