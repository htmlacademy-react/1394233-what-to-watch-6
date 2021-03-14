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
  LOAD_PROMO_FILM: `film/loadPromo`,
  FILM_GENRE: `film/genre`,
  FILM_NAME: `film/name`,
  LOAD_COMMENTS: `comments/load`,
  POST_COMMENT: `comment/post`,
  ACTIVE_FORM: `comment/activeForm`,
  AUTHORIZATION: `site/authorization`,
  AUTHORIZATION_FAILED: `site/authorizationFailed`,
  REDIRECT_TO_ROUTE: `site/redirectToRoute`,
};

export const changeGenres = createAction(ActionType.CHANGE_GENRE, (genre) => ({payload: genre}));

export const showMoreFilms = createAction(ActionType.SHOW_MORE_FILMS);

export const resetAmountShowFilms = createAction(ActionType.RESET_AMOUNT_SHOW_FILMS);

export const changeAmountFilms = createAction(ActionType.CHANGE_AMOUNT_FILMS, (amount) => ({payload: amount}));

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({payload: films}));

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => ({payload: films}));

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({payload: film}));

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => ({payload: film}));

export const getFilmGenre = createAction(ActionType.FILM_GENRE, (genre) => ({payload: genre}));

export const getFilmName = createAction(ActionType.FILM_NAME, (name) => ({payload: name}));

export const postComment = createAction(ActionType.POST_COMMENT);

export const addFavoriteFilmsList = createAction(ActionType.ADD_FAVORITE_FILM, (film) => ({payload: film}));

export const removeFavoriteFilmsList = createAction(ActionType.REMOVE_FAVORITE_FILM, (id) => ({payload: id}));

export const activeForm = createAction(ActionType.ACTIVE_FORM, (boolean) => ({payload: boolean}));

export const authorization = createAction(ActionType.AUTHORIZATION, (action) => ({payload: action}));

export const authorizationFailed = createAction(ActionType.AUTHORIZATION_FAILED, () => ({payload: AuthorizationErrorMessage.EMAIL}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
