import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
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

export default Search
