import React from 'react'
import { connect } from 'react-redux'

const renderTvShow = ({ name, overview, vote_average, vote_count, first_air_date, id, poster_path }) => {
  return (
    <div className="ui grid item" key={id}>
      <div className="four wide column">
        <img className="ui middle aligned small image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      </div>
      <div className="content twelve wide column">
        <h2 className="header">{name}</h2>
        <p>{overview}</p>
        <div className="row">
          <p className="column"><strong>Voter Score: </strong>{`${vote_average} based on ${vote_count} votes`}</p>
          <p className="column"><strong>First Aired: </strong>{first_air_date}</p>
        </div>
      </div>
    </div>
  )
}

const TvShows = ({ shows }) => {
  return (
    <div className="ui celled list">
      {shows.map(renderTvShow)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { shows: state[ownProps.reduxShowType] }
}

export default connect(mapStateToProps)(TvShows)
