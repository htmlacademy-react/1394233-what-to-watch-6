import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {getGenresName} from '../../utils/common';
import {FILMS_AMOUNT_PER_STEP} from '../../consts';

const INITIAL_AMOUNT_FILMS = 0;

const initialState = {
  genres: [],
  amountFilms: INITIAL_AMOUNT_FILMS,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films: [],
  isFilmsLoaded: false,
};

const films = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SHOW_MORE_FILMS, (state) => {
    state.amountShowFilms = state.amountShowFilms + FILMS_AMOUNT_PER_STEP;
  });
  builder.addCase(ActionType.RESET_AMOUNT_SHOW_FILMS, (state) => {
    state.amountShowFilms = FILMS_AMOUNT_PER_STEP;
  });
  builder.addCase(ActionType.CHANGE_AMOUNT_FILMS, (state, action) => {
    state.amountFilms = action.payload;
  });
  builder.addCase(ActionType.LOAD_FILMS, (state, action) => {
    state.films = action.payload;
    state.genres = Array.from(getGenresName(action.payload).keys());
    state.isFilmsLoaded = true;
  });
});

export {films};
