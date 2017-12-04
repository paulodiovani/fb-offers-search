import React, { Component } from 'react'

class RecentSearches extends Component {
  render () {
    return (
      <div>
        <h2>Recent searches</h2>

        <ul>
          <li>
            <a href="#">Super NES</a>
          </li>
          <li>
            <a href="#">Mario Kart</a>
          </li>
          <li>
            <a href="#">Donkey Kong</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default RecentSearches
