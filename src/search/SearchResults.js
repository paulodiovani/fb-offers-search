import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchResults.css'

class SearchResults extends Component {
  render () {
    return (
      <table className="results-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Offer</th>
            <th className="link">Link</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(this.item.bind(this))}
        </tbody>
      </table>
    )
  }

  item (data) {
    return (
      <tr key={data.id}>
        <td>{this.itemPicture(data.picture)}</td>
        <td>{this.itemMessage(data.message)}</td>
        <td className="link"><a href={data.permalink_url}>View sale</a></td>
      </tr>
    )
  }

  itemPicture (picture) {
    if (picture) {
      return (<img src={picture} alt="[picture]"/>)
    }
    return (<span className="no-picture">No picture</span>)
  }

  itemMessage (message) {
    if (message.length > 80) {
      const preview = message.substring(0, 80)
      return (
        <div className="description">
          <span className="preview">{preview}&hellip;</span>
          <span className="help">[mouse over for more]</span>
          <span className="more">{message}</span>
        </div>
      )
    }

    return (<div className="description">{message}</div>)
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
}

export default SearchResults
