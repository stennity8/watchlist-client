import { SET_POPULAR_TVSHOWS, SET_TVSHOW_GENRES, SET_SEARCH_TVSHOWS, CLEAR_SEARCH_TVSHOWS } from './types'
import { TMDBURL } from './url'
const TMDB_KEY = process.env.REACT_APP_TMDB_API_KEY


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

export const setSearchTvShow = (tvShows) => {
  return {
    type: SET_SEARCH_TVSHOWS,
    payload: tvShows
  }
}

export const clearSearchTvShow = () => {
  return {
    type: CLEAR_SEARCH_TVSHOWS
  }
}

export const fetchPopularTvShows = (page) => async dispatch => {
  const response = await fetch(`${TMDBURL}tv/popular?api_key=${TMDB_KEY}&language=en-US&page=${page}`)

  const tvShows = await response.json()

  dispatch(setPopularTvShows(tvShows.results))
}

export const fetchTvShowGenres = () => async dispatch => {
  const response = await fetch(`${TMDBURL}genre/tv/list?api_key=${TMDB_KEY}&language=en-US`)

  const genres = await response.json()

  dispatch(setTvShowGenres(genres.genres))
}

export const fetchSearchTvShows = (queryString) => async dispatch => {
  const response = await fetch(`${TMDBURL}search/tv?api_key=${TMDB_KEY}&language=en-US&query=${queryString}`)

  const tvShows = await response.json()

  dispatch(setSearchTvShow(tvShows.results))
}