import {FiltersType} from '../consts';
import {ActionType} from './action';
import films from '../mocks/films';


const initialState = {
  genre: FiltersType.ALL,
  genres: FiltersType,
  films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMEDIES:
      return {
        ...state,
        genre: FiltersType.COMEDIES,
      };
    case ActionType.CRIME:
      return {
        ...state,
        genre: FiltersType.CRIME,
      };
    case ActionType.DOCUMENTARY:
      return {
        ...state,
        genre: FiltersType.DOCUMENTARY,
      };
    case ActionType.DRAMAS:
      return {
        ...state,
        genre: FiltersType.DRAMAS,
      };
    case ActionType.HORROR:
      return {
        ...state,
        genre: FiltersType.HORROR,
      };
    case ActionType.KIDS_FAMILY:
      return {
        ...state,
        genre: FiltersType.KIDS_FAMILY,
      };
    case ActionType.ROMANCE:
      return {
        ...state,
        genre: FiltersType.ROMANCE,
      };
    case ActionType.SCI_FI:
      return {
        ...state,
        genre: FiltersType.SCI_FI,
      };
    case ActionType.THRILLERS:
      return {
        ...state,
        genre: FiltersType.THRILLERS,
      };
    default:
      return {
        ...initialState
      };
  }
};


export {reducer};
