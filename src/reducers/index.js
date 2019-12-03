import { combineReducers } from 'redux';
import currentUser from './currentUserReducer'
import popularTvShows from './popularTvShowReducer'
import tvShowGenres from './tvShowGenreReducer'
import watchlistTvShows from './watchlistTvShowReducer'
import searchTvShows from './searchTvShowsReducer'

export default combineReducers({
  currentUser,
  popularTvShows,
  tvShowGenres,
  watchlistTvShows,
  searchTvShows
})