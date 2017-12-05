import React, { Component } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Login from './login/Login'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loginStatus: null,
      user: null
    }
  }

  changeLoginStatus (status) {
    this.setState({ loginStatus: status })
  }

  changeUser (user) {
    this.setState({ user })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <Header/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }

  renderContent () {
    if (this.state.loginStatus === 'connected') return (<Main/>)
    return (
      <Login
        changeLoginStatus={this.changeLoginStatus.bind(this)}
        changeUser={this.changeUser.bind(this)}
      />
    )
  }
}

export default App
