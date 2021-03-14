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
    console.log(state.promoMovie);
    state.favoriteFilms = [
      ...state.favoriteFilms,
      action.payload
    ];
    state.films[currentIndexFilm] = Object.assign(
        {},
        state.films[currentIndexFilm],
        {isFavorite: !state.films[currentIndexFilm].isFavorite}
    );
  });
  builder.addCase(ActionType.REMOVE_FAVORITE_FILM, (state, action) => {
    const currentIndexFilm = findFilmIndex(state.films, action.payload);

    state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== action.payload);
    state.films[currentIndexFilm] = Object.assign(
        {},
        state.films[currentIndexFilm],
        {isFavorite: !state.films[currentIndexFilm].isFavorite}
    );
  });
});

export {films};
