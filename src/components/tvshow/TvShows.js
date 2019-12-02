import React from 'react'
import { connect } from 'react-redux'
import { postTvShow } from '../../actions/watchList'

const TvShows = ({ shows, currentUser, tvShowGenres, postTvShow }) => {

  const matchGenres = (genre_ids) => {
    const genres = genre_ids
      .map(genre_id => tvShowGenres
        .find(genre => genre.id === genre_id).name)
      .join(', ')

    return (
      <p className="column"><strong>Genres: </strong>{genres}</p>
    )
  }

  const renderTvShow = ({ name, overview, vote_average, first_air_date, id, poster_path, genre_ids }) => {
    return (
      <div className="ui grid item" key={id}>
        <div className="four wide column">
          <img className="ui middle aligned small image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie poster" />
        </div>
        <div className="content twelve wide column">
          <h2 className="header">{name}</h2>
          {matchGenres(genre_ids)}
          <p>{overview}</p>
          <div className="row">
            <p className="column"><strong>Voter Score: </strong>{vote_average}</p>
            <p className="column"><strong>First Aired: </strong>{first_air_date}</p>
            {renderWatchListButton(id)}
          </div>
        </div>
      </div>
    )
  }

  const addToWatchList = (id) => {
    const show = shows.find(show => show.id === id)
    postTvShow(show, currentUser.id)
  }

  const renderWatchListButton = (id) => {
    if (currentUser) {
      return (
        <button className="column ui button youtube" onClick={() => addToWatchList(id)}>
          <i className="youtube icon"></i>
          Add to WatchList
        </button>
      )
    }
  }

  return (
    <div className="ui celled list">
      {shows.map(renderTvShow)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state[ownProps.reduxShowType],
    currentUser: state.currentUser,
    tvShowGenres: state.tvShowGenres
  }
}

export default connect(mapStateToProps, { postTvShow })(TvShows)
