import React, { Component } from 'react'
import './SearchResults.css'

class SearchResults extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Offer</th>
            <th className="price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="http://lorempixel.com/120/80/abstract/1" alt="[photo]"/></td>
            <td>Great deal</td>
            <td className="price">$ 65.99</td>
          </tr>
          <tr>
            <td><img src="http://lorempixel.com/120/80/abstract/2" alt="[photo]"/></td>
            <td>You cannot lose this one</td>
            <td className="price">$ 10.00</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default SearchResults
