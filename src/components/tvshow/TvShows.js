import React from 'react'
import { connect } from 'react-redux'

const TvShow = ({ name, overview, vote_average, vote_count, first_air_date, id, poster_path }) => {
  return (
    <div className="item" key={id}>
      <img className="ui small image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <div className="content">
        <div className="header">{name}</div>
        {overview}
      </div>
    </div>
  )
}

const TvShows = ({ shows }) => {
  console.log(shows)
  return (
    <div className="ui celled list">
      {shows.map(TvShow)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { shows: state[ownProps.reduxShowType] }
}

export default connect(mapStateToProps)(TvShows)
