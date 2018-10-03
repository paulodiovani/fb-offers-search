import React from 'react'
import PropTypes from 'prop-types'
import './Alert.css'

const Alert = ({ type, message }) => (
  <div className={ `alert alert-${type}` }>
    { message }
  </div>
)

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired
}

export default Alert
