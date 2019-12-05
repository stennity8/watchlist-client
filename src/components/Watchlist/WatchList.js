import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTvShowGenres } from '../../actions/tvShows'
import TvShows from '../TvShow/TvShows'

class WatchList extends Component {
  componentDidMount() {
    this.props.fetchTvShowGenres()
  }

  render() {
    return (
      <div>
        <h2>TV Shows Watchlist</h2>
        <TvShows reduxShowType={"watchlistTvShows"} />
      </div>
    )
  }
}

export default connect(null, { fetchTvShowGenres })(WatchList)