import { combineReducers } from 'redux';
import currentUser from './currentUserReducer'
import popularTvShows from './popularTvShowReducer'
import tvShowGenres from './tvShowGenreReducer'
import watchlistTvShows from './watchlistTvShowReducer'
import searchTvShows from './searchTvShowsReducer'
import { reducer as form } from 'redux-form'
import watchedTvShows from './watchedTvShowReducer'

export default combineReducers({
  currentUser,
  popularTvShows,
  tvShowGenres,
  watchlistTvShows,
  searchTvShows,
  form,
  watchedTvShows
})