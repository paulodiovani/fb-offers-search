import React, { Component } from 'react'
// import RecentSearches from '../search/RecentSearches'
import Search from '../search/Search'
import SearchResults from '../search/SearchResults'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = { results: [] }
  }

  renderResults (results) {
    this.setState({ results })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-75">
            <div className="container">
              <div className="row">
                <div className="column">
                  <Search renderResults={this.renderResults.bind(this)}/>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <SearchResults results={this.state.results} />
                </div>
              </div>
            </div>
          </div>

          <div className="column column-25">
            <div className="row">
              <div className="column">
                foo
              </div>
              {/* <div className="column">
                <RecentSearches/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
