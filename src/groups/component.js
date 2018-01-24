import './component.css'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Groups extends Component {
  componentDidMount () {
    this.props.groupsFetch()
  }

  render () {
    return (
      <div>
        <h2>Groups</h2>

        <ul className="groups-list">
          {this.props.groups.map(this.renderItem)}
        </ul>
      </div>
    )
  }

  renderItem (data) {
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

Groups.propTypes = {
  groupsFetch: PropTypes.func,
  groups: PropTypes.array
}

export default Groups
