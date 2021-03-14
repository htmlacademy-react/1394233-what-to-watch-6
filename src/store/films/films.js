import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';
import {getGenresName} from '../../utils/common';
import {FILMS_AMOUNT_PER_STEP} from '../../consts';

const INITIAL_AMOUNT_FILMS = 0;

const findFilmIndex = (films, id) => films.findIndex((film) => film.id === id);

const initialState = {
  genres: [],
  amountFilms: INITIAL_AMOUNT_FILMS,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films: [],
  favoriteFilms: [],
  isFilmsLoaded: false,
  isFavoriteFilmsLoaded: false,
  loadedFilm: {},
  isFilmLoaded: false,
  isPromoFilmLoaded: false,
  promoMovie: {},
  activeFilmGenre: ``,
  activeFilmName: ``
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
  builder.addCase(ActionType.LOAD_FAVORITE_FILMS, (state, action) => {
    state.favoriteFilms = action.payload;
    state.isFavoriteFilmsLoaded = true;
  });
  builder.addCase(ActionType.ADD_FAVORITE_FILM, (state, action) => {
    const currentIndexFilm = findFilmIndex(state.films, action.payload.id);
    state.favoriteFilms = [
      ...state.favoriteFilms,
      action.payload
    ];
    state.films[currentIndexFilm] = Object.assign(
        {},
        state.films[currentIndexFilm],
        {isFavorite: !state.films[currentIndexFilm].isFavorite}
    );
    if (state.promoMovie.id === action.payload.id) {
      state.promoMovie = Object.assign(
          {},
          state.promoMovie,
          {isFavorite: !state.promoMovie.isFavorite}
      );
    }
  });
  builder.addCase(ActionType.REMOVE_FAVORITE_FILM, (state, action) => {
    const currentIndexFilm = findFilmIndex(state.films, action.payload);

    state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== action.payload);
    state.films[currentIndexFilm] = Object.assign(
        {},
        state.films[currentIndexFilm],
        {isFavorite: !state.films[currentIndexFilm].isFavorite}
    );
    if (state.promoMovie.id === action.payload) {
      state.promoMovie = Object.assign(
          {},
          state.promoMovie,
          {isFavorite: !state.promoMovie.isFavorite}
      );
    }
  });
  builder.addCase(ActionType.LOAD_FILM, (state, action) => {
    state.loadedFilm = action.payload;
    state.isFilmLoaded = true;
  });
  builder.addCase(ActionType.LOAD_PROMO_FILM, (state, action) => {
    state.promoMovie = action.payload;
    state.isPromoFilmLoaded = true;
  });
  builder.addCase(ActionType.FILM_GENRE, (state, action) => {
    state.activeFilmGenre = action.payload;
  });
  builder.addCase(ActionType.FILM_NAME, (state, action) => {
    state.activeFilmName = action.payload;
  });
});

export {films};
