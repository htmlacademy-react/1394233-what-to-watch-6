import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Movie from '../movie/movie';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import browserHistory from "../../browser-history";
import {AuthorizationStatuses, Url} from '../../consts';
import {MOVIES_PROP, REVIEW_PROP, MOVIES_NOT_REQUIRE_PROP} from '../../utils/validate';
import {fetchFilm} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getFilms, getFilmsLoadedStatus} from '../../store/films/selectors';
import {getFilmLoadedStatus, getLoadedFilm} from '../../store/film/selectors';
import {getReviews} from '../../store/comment/selectors';
import {getAuthorizationStatus} from '../../store/auth/selectors';

const App = ({films, reviews, authorizationStatus, loadFilm, loadedFilm, isFilmLoaded, isFilmsLoaded}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Url.MAIN}>
          <Main />
        </Route>
        <Route exact path={Url.SIGN_IN} render={() => {
          return (
            authorizationStatus === AuthorizationStatuses.AUTH
              ? <Redirect to={Url.MAIN} />
              : <SignInScreen />
          );
        }}>
        </Route>
        <PrivateRoute exact
          path={Url.MY_LIST}
          render={() => <MyList />}
        />
        <Route exact path={Url.MOVIE} render={({history, match}) => {
          const id = match.params.id;
          if (isFilmsLoaded) {
            return <Movie
              film={films[id - 1]}
              id={id}
              reviews={reviews[id]}
              onPlayMovie={() => history.push(`/player/${id}`)}
              onAddFavoriteMovie={() => history.push(Url.MY_LIST)}
            />;
          }
          if (!isFilmLoaded) {
            loadFilm(id);
            return <LoadingScreen />;
          }
          return <Movie
            film={loadedFilm}
            id={id}
            reviews={reviews[id]}
            onPlayMovie={() => history.push(`/player/${id}`)}
            onAddFavoriteMovie={() => history.push(Url.MY_LIST)}
          />;
        }}/>
        <PrivateRoute exact
          path={Url.ADD_REVIEW}
          render={({match}) => {
            const filmID = match.params.id;
            if (isFilmsLoaded) {
              const {name, posterImage, backgroundImage, id} = films[filmID - 1];
              return <AddReview
                title={name}
                poster={posterImage}
                backgroundImage={backgroundImage}
                filmID={id}
              />;
            }
            if (isFilmLoaded) {
              const {name, posterImage, backgroundImage, id} = loadedFilm;
              return <AddReview
                title={name}
                poster={posterImage}
                backgroundImage={backgroundImage}
                filmID={id}
              />;
            }

            return <LoadingScreen />;
          }}
        />
        <Route exact path={Url.PLAYER} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Player
            duration={film.runTime}
            title={film.name}
          />;
        }} />
        <Route exact path={Url.NOT_FOUND}>
          <NotFoundPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  loadedFilm: PropTypes.shape(MOVIES_NOT_REQUIRE_PROP).isRequired,
  loadFilm: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))).isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  loadedFilm: getLoadedFilm(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  isFilmLoaded: getFilmLoadedStatus(state),
  isFilmsLoaded: getFilmsLoadedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchFilm(id));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
