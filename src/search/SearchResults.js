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
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Offer</th>
            <th className="link">Link</th>
          </tr>
        </thead>
        <tbody>
          {this.state.results.map(this.row)}
        </tbody>
      </table>
    )
  }

  row (data) {
    return (
      <tr key={data.id}>
        <td><img src={data.picture} alt="[photo]"/></td>
        <td><div className="truncated">{data.message}</div></td>
        <td className="link"><a href={data.permalink_url}>link</a></td>
      </tr>
    )
  }
}

export default SearchResults
