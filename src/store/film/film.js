import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import films from '../../mocks/films';

const initialState = {
  loadedFilm: {},
  isFilmLoaded: false,
  promoMovie: films[0],
  activeFilmGenre: ``,
  activeFilmName: ``
};

const film = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_FILM, (state, action) => {
    state.loadedFilm = action.payload;
    state.isFilmLoaded = true;
  });
  builder.addCase(ActionType.FILM_GENRE, (state, action) => {
    state.activeFilmGenre = action.payload;
  });
  builder.addCase(ActionType.FILM_NAME, (state, action) => {
    state.activeFilmName = action.payload;
  });
});

export {film};
