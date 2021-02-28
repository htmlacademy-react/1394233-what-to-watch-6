import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
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
import {Urls} from '../../consts';
import {MOVIES_PROP, REVIEW_PROP} from '../../utils/validate';

const App = ({films, reviews}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Urls.MAIN}>
          <Main />
        </Route>
        <Route exact path={Urls.SIGN_IN}>
          <SignInScreen />
        </Route>
        <PrivateRoute exact
          path={Urls.MY_LIST}
          render={() => <MyList />}
        />
        <Route exact path={Urls.MOVIE} render={({history, match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Movie
            film={film}
            reviews={reviews[id]}
            onPlayMovie={() => history.push(`/player/${id}`)}
            onAddFavoriteMovie={() => history.push(Urls.MY_LIST)}
          />;
        }}/>
        <PrivateRoute exact
          path={Urls.ADD_REVIEW}
          render={({match}) => {
            const id = match.params.id;
            const film = films[id - 1];
            return <AddReview
              title={film.name}
              poster={film.posterImage}
              backgroundImage={film.backgroundImage}
              id={film.id}
            />;
          }}
        />
        <Route exact path={Urls.PLAYER} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Player
            duration={film.runTime}
            title={film.name}
          />;
        }} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))).isRequired
};

const mapStateToProps = ({films, reviews}) => ({
  films,
  reviews
});

export {App};
export default connect(mapStateToProps)(App);
