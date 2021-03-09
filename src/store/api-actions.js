import {AuthorizationStatuses, Url} from "../consts";
import {ActionCreator} from "./action";

const Routes = {
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const adaptToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        posterImage: film.poster_image,
        previeImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link
      }
  );

  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;

  return adaptedFilm;
};

const adaptToServer = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        comment: comment.text
      }
  );

  delete adaptedComment.text;

  return adaptedComment;
};

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(Routes.FILMS)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => {
      dispatch(ActionCreator.changeAmountFilms(data.length));
      return dispatch(ActionCreator.loadFilms(data));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => dispatch(ActionCreator.loadFilm(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(Url.NOT_FOUND)))
);

export const postComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, adaptToServer(comment))
    .then(() => dispatch(ActionCreator.postComment()))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}`)))
    .catch(() => dispatch(ActionCreator.postComment()))
);

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(Routes.LOGIN)
    .then(() => dispatch(ActionCreator.authorization(AuthorizationStatuses.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(Routes.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.authorization(AuthorizationStatuses.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Url.MAIN)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(Routes.LOGOUT)
    .then(() => dispatch(ActionCreator.authorization(AuthorizationStatuses.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Url.MAIN)))
);
