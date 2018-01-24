import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import config from '../config.json'

function login ({
  loginSucceed,
  loginFailed
}) {
  return (
    <div>
      <FacebookLogin
        appId={config.facebook.appId}
        autoLoad={true}
        fields="name,email,picture"
        callback={loginSucceed}
        onFailure={loginFailed}
        textButton="&nbsp;Login with Facebook"
        cssClass="button"
        icon="fa-facebook-official"/>
    </div>
  )
}

login.propTypes = {
  loginSucceed: PropTypes.func,
  loginFailed: PropTypes.func
}

export default login
