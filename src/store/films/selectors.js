import {NameSpace} from '../main-reducer';

export const getFilmsLoadedStatus = (state) => state[NameSpace.FILMS].isFilmsLoaded;
export const getGenres = (state) => state[NameSpace.FILMS].genres;
export const getAmountFilms = (state) => state[NameSpace.FILMS].amountFilms;
export const getAmountShowFilms = (state) => state[NameSpace.FILMS].amountShowFilms;
