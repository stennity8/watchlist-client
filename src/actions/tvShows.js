import { SET_POPULAR_TVSHOWS, SET_TVSHOW_GENRES } from './types'
import { TMDB_KEY } from '../api_keys'

export const setPopularTvShows = (tvShows) => {
  return {
    type: SET_POPULAR_TVSHOWS,
    payload: tvShows
  }
}

export const setTvShowGenres = (genres) => {
  return {
    type: SET_TVSHOW_GENRES,
    payload: genres
  }
}

export const fetchPopularTvShows = () => async dispatch => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_KEY}&language=en-US&page=1`)

  const tvShows = await response.json()

  dispatch(setPopularTvShows(tvShows.results))
}

export const fetchTvShowGenres = () => async dispatch => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${TMDB_KEY}&language=en-US`)

  const genres = await response.json()

  dispatch(setTvShowGenres(genres))
}