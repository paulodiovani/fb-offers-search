import React, { Component } from 'react'
import PropTypes from 'prop-types'
import elasticlunr from 'elasticlunr'
import Alert from '../alert/Alert'
import config from '../config.json'

class Search extends Component {
  constructor (props) {
    super(props)

    this.documents = []
    this.index = elasticlunr(function () {
      this.setRef('id')
      this.addField('message')
    })

    this.state = {
      error: null
    }
  }

  shouldComponentUpdate () {
    return !this.state.error
  }

  addDoc (doc) {
    this.documents.push(doc)
    this.index.addDoc(doc)
  }

  renderResults (documents) {
    this.props.renderResults(documents)
  }

  componentDidMount () {
    config.facebook.groupIds.forEach((gid) => this.fetchGroupFeed(gid))
  }

  fetchGroupFeed (groupId, next = null) {
    let url = `/${groupId}/feed?fields=message,picture,permalink_url,created_time`
    if (next) url = next

    window.FB.api(url, (response) => {
      if (response.error) {
        return this.setState({ error: 'Error fechting group feed.' })
      }

      response.data.forEach((doc) => this.addDoc(doc))

      if (response.data.length > 0) {
        this.fetchGroupFeed(groupId, response.paging.next)
      }
    })
  }

  search (el) {
    const results = this.index.search(el.target.value, {
      bool: 'AND',
      expand: true
    })
    const documents = results.map((item) => {
      return this.documents.find((doc) => doc.id === item.ref)
    })
    this.renderResults(documents)
  }

  render () {
    if (this.state.error) {
      return (<Alert type="error" message={ this.state.error } />)
    }

    return (
      <form action="#">
        <fieldset>
          <label htmlFor="search"></label>
          <div className="form-group">
            <input type="text" id="search" placeholder="Search"
              onChange={this.search.bind(this)}/>
          </div>
        </fieldset>
      </form>
    )
  }
}

Search.propTypes = {
  renderResults: PropTypes.func
}

export default Search
