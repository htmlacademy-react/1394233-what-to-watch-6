import {FILMS_AMOUNT_PER_STEP, FiltersType, Genres} from '../consts';
import {ActionType} from './action';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const initialState = {
  genre: FiltersType.ALL,
  genres: Genres,
  amountFilms: films.length,
  amountShowFilms: FILMS_AMOUNT_PER_STEP,
  films,
  promoMovie: films[0],
  reviews
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return {
        ...initialState
      };
  }
};


export {reducer};
