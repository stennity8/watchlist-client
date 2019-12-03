import React from 'react'
import { connect } from 'react-redux'
import { postTvShow } from '../../actions/watchList'
import history from '../../history'

const TvShows = ({ shows, currentUser, tvShowGenres, postTvShow, watchlistTvShows }) => {

  const matchGenres = (genre_ids) => {
    //This formula iterates over the show's genre ids and compares to the API's genres.  It checks for 
    // non-existant genres to avoid errors.
    const genres = genre_ids.map(genre_id => {
      if (tvShowGenres.find(genre => genre.id === genre_id)) {
        return tvShowGenres.find(genre => genre.id === genre_id).name
      } else {
        return 'unknown genre'
      }
    }).join(', ')

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
            {history.location.pathname === "/" ? renderWatchListButton(id) : renderAdminButtons()}
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
    const currentlyOnList = watchlistTvShows.find(show => show.TMDB_ID === id)
    if (currentUser && !currentlyOnList) {
      return (
        <button className="column ui button youtube" onClick={() => addToWatchList(id)}>
          <i className="youtube icon"></i>
          Add to WatchList
        </button>
      )
    }
  }

  const renderAdminButtons = () => {
    return (
      <button className="column ui button green" onClick={() => addToWatchList()}>
        <i className="edit outline icon"></i>
        Admin buttons coming soon
      </button>
    )
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
    tvShowGenres: state.tvShowGenres,
    watchlistTvShows: state.watchlistTvShows
  }
}

export default connect(mapStateToProps, { postTvShow })(TvShows)
