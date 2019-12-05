import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPopularTvShows, fetchTvShowGenres } from '../../actions/tvShows'
import TvShows from './TvShows'

class PopularTvShowList extends Component {
  componentDidMount() {
    this.props.fetchTvShowGenres()
    this.props.fetchPopularTvShows()
  }

  render() {
    return (
      <div className="ui raised container">
        <h2>Popular TV Shows</h2>
        <TvShows reduxShowType={"popularTvShows"} />
      </div>
    )
  }
}

export default connect(null, { fetchPopularTvShows, fetchTvShowGenres })(PopularTvShowList)