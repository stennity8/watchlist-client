import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSearchTvShows } from '../../actions/tvShows'
import TvSearchForm from '../search/TvSearchForm'
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

  render() {
    return (
      <div>
        <TvSearchForm onChange={this.onChange} handleSubmit={this.handleSubmit} searchTerm={this.state.searchTerm} />
        {this.props.shows.length > 0 ? <TvShows reduxShowType={"searchTvShows"} /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { shows: state.searchTvShows }
}

export default connect(mapStateToProps, { fetchSearchTvShows })(SearchTvShowList)