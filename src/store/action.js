import {createAction} from '@reduxjs/toolkit';
import {AuthorizationErrorMessage} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  SHOW_MORE_FILMS: `films/showMore`,
  RESET_AMOUNT_SHOW_FILMS: `films/resetAmountShow`,
  CHANGE_AMOUNT_FILMS: `films/changeAmount`,
  LOAD_FILMS: `films/load`,
  LOAD_FAVORITE_FILMS: `films/loadFavorite`,
  ADD_FAVORITE_FILM: `films/addFavorite`,
  REMOVE_FAVORITE_FILM: `films/removeFavorite`,
  LOAD_FILM: `film/load`,
  FILM_GENRE: `film/genre`,
  FILM_NAME: `film/name`,
  LOAD_COMMENTS: `comments/load`,
  POST_COMMENT: `comment/post`,
  ACTIVE_FORM: `comment/activeForm`,
  AUTHORIZATION: `site/authorization`,
  AUTHORIZATION_FAILED: `site/authorizationFailed`,
  REDIRECT_TO_ROUTE: `site/redirectToRoute`,
};

export const changeGenres = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const showMoreFilms = createAction(ActionType.SHOW_MORE_FILMS);

export const resetAmountShowFilms = createAction(ActionType.RESET_AMOUNT_SHOW_FILMS);

export const changeAmountFilms = createAction(ActionType.CHANGE_AMOUNT_FILMS, (amount) => {
  return {
    payload: amount,
  };
});

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
  return {
    payload: film,
  };
});

export const getFilmGenre = createAction(ActionType.FILM_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const getFilmName = createAction(ActionType.FILM_NAME, (name) => {
  return {
    payload: name,
  };
});

export const postComment = createAction(ActionType.POST_COMMENT);

export const addFavoriteFilmsList = createAction(ActionType.ADD_FAVORITE_FILM, (film) => {
  return {
    payload: film,
  };
});

export const removeFavoriteFilmsList = createAction(ActionType.REMOVE_FAVORITE_FILM, (id) => {
  return {
    payload: id,
  };
});

export const activeForm = createAction(ActionType.ACTIVE_FORM, (boolean) => {
  return {
    payload: boolean,
  };
});

export const authorization = createAction(ActionType.AUTHORIZATION, (action) => {
  return {
    payload: action,
  };
});

export const authorizationFailed = createAction(ActionType.AUTHORIZATION_FAILED, () => {
  return {
    payload: AuthorizationErrorMessage.EMAIL,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
