import {NameSpace} from '../main-reducer';

export const getActiveGenre = (state) => state[NameSpace.GENRE].genre;
