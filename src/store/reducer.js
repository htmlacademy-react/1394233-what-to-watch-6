import {AuthorizationErrorMessage, AuthorizationStatuses, FILMS_AMOUNT_PER_STEP, ALL_GENRES_NAME_TAB} from '../consts';
import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';
import {getGenres} from '../utils/common';

const initialState = {
  genre: ALL_GENRES_NAME_TAB,
  genres: [],
  amountFilms: films.length,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films: [],
  loadedFilm: {},
  promoMovie: films[0],
  reviews,
  isFilmsLoaded: false,
  isFilmLoaded: false,
  authorizationStatus: AuthorizationStatuses.NO_AUTH,
  isAuthorisationFailed: false,
  errorMessage: AuthorizationErrorMessage.DEFAULT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        amountShowFilms: state.amountShowFilms + FILMS_AMOUNT_PER_STEP,
      };
    case ActionType.RESET_AMOUNT_SHOW_FILMS:
      return {
        ...state,
        amountShowFilms: FILMS_AMOUNT_PER_STEP,
      };
    case ActionType.CHANGE_AMOUNT_FILMS:
      return {
        ...state,
        amountFilms: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        genres: Array.from(getGenres(action.payload).keys()),
        isFilmsLoaded: true,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        loadedFilm: action.payload,
        isFilmLoaded: true,
      };
    case ActionType.AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        isAuthorisationFailed: false,
        errorMessage: AuthorizationErrorMessage.DEFAULT,
      };
    case ActionType.AUTHORIZATION_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isAuthorisationFailed: true
      };
    case ActionType.REDIRECT_TO_ROUTE:
      return {
        ...state,
      };
    default:
      return {
        ...initialState
      };
  }
};

export {reducer};
