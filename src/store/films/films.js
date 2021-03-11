import {ActionType} from '../action';
import {getGenres} from '../../utils/common';
import {FILMS_AMOUNT_PER_STEP} from '../../consts';

const INITIAL_AMOUNT_FILMS = 0;

const initialState = {
  genres: [],
  amountFilms: INITIAL_AMOUNT_FILMS,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films: [],
  isFilmsLoaded: false,
};

const films = (state = initialState, action) => {
  switch (action.type) {
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
  }

  return state;
};

export {films};
