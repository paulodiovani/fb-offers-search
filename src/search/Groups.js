import React, { Component } from 'react'
import config from '../config.json'
import Alert from '../alert/Alert'
import './Groups.css'

class Groups extends Component {
  constructor (props) {
    super(props)

    this.state = { groups: [] }
  }

  componentDidMount () {
    config.facebook.groupIds.forEach((gid) => {
      window.FB.api(
        `/${gid}?fields=cover,name,description`,
        (group) => {
          const groups = this.state.groups
          groups.push(group)
          this.setState({ groups })
        }
      )
    })
  }

  render () {
    return (
      <div>
        <h2>Groups</h2>

        <ul className="groups-list">
          {this.state.groups.map(this.renderItem.bind(this))}
        </ul>
      </div>
    )
  }

  renderItem (data) {
    if (data.error) {
      console.error(data.error)
      return (<li><Alert type="warning" message="Error loading group" /></li>)
    }

    return (
      <li key={`group-${data.id}`} style={{ backgroundImage: `url(${data.cover.source})` }}>
        <a className="link"
          href={`https://www.facebook.com/groups/${data.id}/`}
          title={data.description}
          target="_blank">{data.name}</a>
      </li>
    )
  }
}

export default Groups
