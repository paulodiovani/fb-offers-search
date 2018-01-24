import Header from '../header/Header'
import Login from '../login'
import Main from '../main/Main'
import PropTypes from 'prop-types'
import React from 'react'

function app ({ status }) {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Header/>
        </div>
      </div>

      <div className="row">
        <div className="column">
          {renderContent(status)}
        </div>
      </div>
    </div>
  )
}

app.propTypes = {
  status: PropTypes.string
}

function renderContent (status) {
  if (status === 'connected') return (<Main/>)
  return (
    <Login />
  )
}

export default app
