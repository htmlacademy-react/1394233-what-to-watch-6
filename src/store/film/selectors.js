import {NameSpace} from '../main-reducer';

export const getFilmLoadedStatus = (state) => state[NameSpace.FILM].isFilmLoaded;
export const getLoadedFilm = (state) => state[NameSpace.FILM].loadedFilm;
export const getPromoMovie = (state) => state[NameSpace.FILM].promoMovie;
export const getActiveFilmGenre = (state) => state[NameSpace.FILM].activeFilmGenre;
export const getActiveFilmName = (state) => state[NameSpace.FILM].activeFilmName;
