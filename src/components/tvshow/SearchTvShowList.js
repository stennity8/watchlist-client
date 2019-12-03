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
    this.props.fetchSearchTvShows(this.state)
    this.setState({
      searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <TvSearchForm />
        {this.props.searchTvShows.lenghth > 0 ? <TvShows reduxShowType={"searchTvShows"} /> : null}
      </div>
    )
  }
}

mapStateToProps = (state) => {
  shows: state.searchTvShows
}

export default connect(mapStateToProps, { fetchSearchTvShows })(SearchTvShowList)