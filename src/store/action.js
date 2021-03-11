import {createAction} from '@reduxjs/toolkit';
import {AuthorizationErrorMessage} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  SHOW_MORE_FILMS: `films/showMore`,
  RESET_AMOUNT_SHOW_FILMS: `films/resetAmountShow`,
  CHANGE_AMOUNT_FILMS: `films/changeAmount`,
  LOAD_FILMS: `films/load`,
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

// export const ActionCreator = {
//   changeGenres: (genre) => ({
//     type: ActionType.CHANGE_GENRE,
//     payload: genre
//   }),
//   showMoreFilms: () => ({
//     type: ActionType.SHOW_MORE_FILMS,
//   }),
//   resetAmountShowFilms: () => ({
//     type: ActionType.RESET_AMOUNT_SHOW_FILMS,
//   }),
//   changeAmountFilms: (amount) => ({
//     type: ActionType.CHANGE_AMOUNT_FILMS,
//     payload: amount,
//   }),
//   loadFilms: (films) => ({
//     type: ActionType.LOAD_FILMS,
//     payload: films
//   }),
//   loadFilm: (film) => ({
//     type: ActionType.LOAD_FILM,
//     payload: film
//   }),
//   getFilmGenre: (genre) => ({
//     type: ActionType.FILM_GENRE,
//     payload: genre
//   }),
//   getFilmName: (name) => ({
//     type: ActionType.FILM_NAME,
//     payload: name
//   }),
//   postComment: () => ({
//     type: ActionType.POST_COMMENT,
//   }),
//   activeForm: (boolean) => ({
//     type: ActionType.ACTIVE_FORM,
//     payload: boolean
//   }),
//   authorization: (action) => ({
//     type: ActionType.AUTHORIZATION,
//     payload: action
//   }),
//   authorizationFailed: () => ({
//     type: ActionType.AUTHORIZATION_FAILED,
//     payload: AuthorizationErrorMessage.EMAIL
//   }),
//   redirectToRoute: (url) => ({
//     type: ActionType.REDIRECT_TO_ROUTE,
//     payload: url,
//   }),
// };
