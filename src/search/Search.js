import React, { Component } from 'react'
import PropTypes from 'prop-types'
import elasticlunr from 'elasticlunr'
import './Search.css'

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

  populate (documents) {
    this.props.populate(documents)
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
    this.populate(documents)
  }

  render () {
    return (
      <form action="#">
        <fieldset>
          <label htmlFor="search"></label>
          <div className="form-group">
            <input type="text" id="search" onChange={this.search.bind(this)}/>
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
