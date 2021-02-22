import films from '../mocks/films';
import ActionType from './action';

const initialState = {
  genre: `all`,
  films,
};

const FiltersType = {
  ALL: `All`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

const filterMovies = (movies, genre) => movies.filter((movie) => movie.genre === genre);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMEDIES:
      return {
        ...state,
        genre: FiltersType.COMEDIES,
        films: filterMovies(films, FiltersType.COMEDIES)
      };
    case ActionType.CRIME:
      return {
        ...state,
        genre: FiltersType.CRIME,
        films: filterMovies(films, FiltersType.CRIME)
      };
    case ActionType.DOCUMENTARY:
      return {
        ...state,
        genre: FiltersType.DOCUMENTARY,
        films: filterMovies(films, FiltersType.DOCUMENTARY)
      };
    case ActionType.DRAMAS:
      return {
        ...state,
        genre: FiltersType.DRAMAS,
        films: filterMovies(films, FiltersType.DRAMAS)
      };
    case ActionType.HORROR:
      return {
        ...state,
        genre: FiltersType.HORROR,
        films: filterMovies(films, FiltersType.HORROR)
      };
    case ActionType.KIDS_FAMILY:
      return {
        ...state,
        genre: FiltersType.KIDS_FAMILY,
        films: filterMovies(films, FiltersType.KIDS_FAMILY)
      };
    case ActionType.ROMANCE:
      return {
        ...state,
        genre: FiltersType.ROMANCE,
        films: filterMovies(films, FiltersType.ROMANCE)
      };
    case ActionType.SCI_FI:
      return {
        ...state,
        genre: FiltersType.SCI_FI,
        films: filterMovies(films, FiltersType.SCI_FI)
      };
    case ActionType.THRILLERS:
      return {
        ...state,
        genre: FiltersType.THRILLERS,
        films: filterMovies(films, FiltersType.THRILLERS)
      };
    default:
      return state;
  }
};


export {reducer};
