import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Search.css'

const groupIds = [
  // '1002772103090233',
  '502867033154810'
]

class Search extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {
    let results = []

    groupIds.forEach((gid) => {
      window.FB.api(
        `/${gid}/feed?fields=message,picture,permalink_url,created_time`,
        (response) => {
          results = results.concat(response.data)
          results.sort((a, b) => a.created_time < b.created_time ? -1 : 1)
          this.props.populate(results)
        }
      )
    })
  }

  render () {
    return (
      <form action="#">
        <fieldset>
          <label htmlFor="search"></label>
          <div className="form-group">
            <input type="text" id="search"/>
            <input className="button-primary" type="submit" value="Search"/>
          </div>
        </fieldset>
      </form>
    )
  }
}

Search.propTypes = {
  populate: PropTypes.func
}

export default Search
