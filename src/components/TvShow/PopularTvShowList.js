import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPopularTvShows, fetchTvShowGenres } from '../../actions/tvShows'
import TvShows from './TvShows'
import Pagination from '../Pagination/Pagination'
import './TvShows.css'

class PopularTvShowList extends Component {
  componentDidMount() {
    this.props.fetchTvShowGenres()
    this.props.fetchPopularTvShows(1)
  }

  render() {
    return (
      <div className="ui raised container">
        <h2>Popular TV Shows</h2>
        <TvShows reduxShowType={"popularTvShows"} />
        <br />
        <div className="ui centered column grid pagination-margin" >
          <Pagination />
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchPopularTvShows, fetchTvShowGenres })(PopularTvShowList)