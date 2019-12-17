import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTvShowGenres } from '../../actions/tvShows'
import TvShows from '../TvShow/TvShows'

class Watched extends Component {
  componentDidMount() {
    this.props.fetchTvShowGenres()
  }

  render() {
    return (
      <div>
        <h2>Watched TV Shows</h2>
        <TvShows reduxShowType={"watchedTvShows"} />
      </div>
    )
  }
}

export default connect(null, { fetchTvShowGenres })(Watched)