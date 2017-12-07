import React, { Component } from 'react'

class RecentSearches extends Component {
  render () {
    return (
      <div>
        <h2>Recent searches</h2>

        <ul>
          <li>
            <a disabled>Super NES</a>
          </li>
          <li>
            <a disabled>Mario Kart</a>
          </li>
          <li>
            <a disabled>Donkey Kong</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default RecentSearches
