import React, { Component } from 'react'
import PropTypes from 'prop-types'
import elasticlunr from 'elasticlunr'

const groupIds = [
  '1002772103090233',
  '502867033154810'
]

class Search extends Component {
  constructor (props) {
    super(props)

    this.documents = []
    this.index = elasticlunr(function () {
      this.setRef('id')
      this.addField('message')
    })
  }

  shouldComponentUpdate () {
    return false
  }

  addDoc (doc) {
    this.documents.push(doc)
    this.index.addDoc(doc)
  }

  renderResults (documents) {
    this.props.renderResults(documents)
  }

  componentDidMount () {
    groupIds.forEach((gid) => {
      window.FB.api(
        `/${gid}/feed?fields=message,picture,permalink_url,created_time`,
        (response) => {
          response.data.forEach((doc) => this.addDoc(doc))
        }
      )
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
