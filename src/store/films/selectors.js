import {createSelector} from 'reselect';
import {getFilteredMovies} from '../../utils/common';
import {getActiveGenre} from '../genre/selectors';
import {NameSpace} from '../main-reducer';

const getSimilarMovies = (films, genre, name) => films.filter((film) => film.genre === genre && film.name !== name);

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].favoriteFilms;
export const getFilmsLoadedStatus = (state) => state[NameSpace.FILMS].isFilmsLoaded;
export const getFavoriteFilmsLoadedStatus = (state) => state[NameSpace.FILMS].isFavoriteFilmsLoaded;
export const getGenres = (state) => state[NameSpace.FILMS].genres;
export const getAmountFilms = (state) => state[NameSpace.FILMS].amountFilms;
export const getAmountShowFilms = (state) => state[NameSpace.FILMS].amountShowFilms;
export const getFilmLoadedStatus = (state) => state[NameSpace.FILMS].isFilmLoaded;
export const getLoadedFilm = (state) => state[NameSpace.FILMS].loadedFilm;
export const getPromoMovie = (state) => state[NameSpace.FILMS].promoMovie;
export const getPromoMovieLoadStatus = (state) => state[NameSpace.FILMS].isPromoFilmLoaded;
export const getActiveFilmGenre = (state) => state[NameSpace.FILMS].activeFilmGenre;
export const getActiveFilmName = (state) => state[NameSpace.FILMS].activeFilmName;

export const getFilmsWithGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => getFilteredMovies(films, genre)
);

export const getSimmilarMoviesWithGenre = createSelector(
    getFilms,
    getActiveFilmGenre,
    getActiveFilmName,
    (films, genre, name) => getSimilarMovies(films, genre, name)
);
