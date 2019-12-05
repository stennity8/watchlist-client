import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSearchTvShows } from '../../actions/tvShows'
import TvSearchForm from '../Search/TvSearchForm'
import TvShows from './TvShows'

class SearchTvShowList extends Component {
  state = {
    searchTerm: ""
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({
      searchTerm: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let searchString = this.state.searchTerm.split(' ').join('+')
    this.props.fetchSearchTvShows(searchString)
    this.setState({
      searchTerm: ""
    })
  }

  renderSearchResults = () => {
    if (typeof this.props.shows === "string") {
      return (<h2>{this.props.shows}</h2>)
    } else if (this.props.shows.length > 0) {
      return (
        <>
          <h2>Search Results</h2>
          <TvShows reduxShowType={"searchTvShows"} />
        </>
      )
    } else {
      return (null)
    }
  }

  render() {
    return (
      <div className="ui raised container">
        <TvSearchForm onChange={this.onChange} handleSubmit={this.handleSubmit} searchTerm={this.state.searchTerm} />
        {this.renderSearchResults()}
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { shows: state.searchTvShows }
}

export default connect(mapStateToProps, { fetchSearchTvShows })(SearchTvShowList)