import React, { Component } from 'react'
import './SearchResults.css'

const groupIds = [
  // '1002772103090233',
  '502867033154810'
]

class SearchResults extends Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }
  }

  componentDidMount () {
    groupIds.forEach((gid) => {
      window.FB.api(
        `/${gid}/feed?fields=message,picture,permalink_url,created_time`,
        (response) => {
          const results = this.state.results.concat(response.data)
          results.sort((a, b) => a.created_time < b.created_time ? -1 : 1)
          this.setState({ results })
        }
      )
    })
  }

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
          {this.state.results.map(this.item.bind(this))}
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

export default SearchResults
