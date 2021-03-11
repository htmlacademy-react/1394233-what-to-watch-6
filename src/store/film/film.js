import {ActionType} from '../action';
import films from '../../mocks/films';

const initialState = {
  loadedFilm: {},
  isFilmLoaded: false,
  promoMovie: films[0],
  activeFilmGenre: ``,
  activeFilmName: ``
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        loadedFilm: action.payload,
        isFilmLoaded: true,
      };
    case ActionType.FILM_GENRE:
      return {
        ...state,
        activeFilmGenre: action.payload,
      };
    case ActionType.FILM_NAME:
      return {
        ...state,
        activeFilmName: action.payload,
      };
  }

  return state;
};

export {film};
