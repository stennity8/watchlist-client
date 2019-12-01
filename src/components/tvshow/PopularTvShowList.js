import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPopularTvShows, fetchTvShowGenres } from '../../actions/tvShows'

class PopularTvShowList extends Component {
  componentDidMount() {
    // this.props.fetchTvShowGenres()
    // this.props.fetchPopularTvShows()
  }

  render() {
    return (
      <div>
        PopularTvShowList
      </div>
    )
  }
}

export default connect(null, { fetchPopularTvShows, fetchTvShowGenres })(PopularTvShowList)