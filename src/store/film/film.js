import {ActionType} from '../action';
import films from '../../mocks/films';

const initialState = {
  loadedFilm: {},
  isFilmLoaded: false,
  promoMovie: films[0],
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        loadedFilm: action.payload,
        isFilmLoaded: true,
      };
  }

  return state;
};

export {film};
