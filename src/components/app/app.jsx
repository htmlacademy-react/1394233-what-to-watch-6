import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Movie from '../movie/movie';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import {Urls} from '../../consts';
import {MOVIES_PROP, REVIEW_PROP} from '../../utils/validate';

const App = ({films, promoMovie, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Urls.MAIN}>
          <Main
            films={films}
            promoMovie={promoMovie}
          />
        </Route>
        <Route exact path={Urls.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={Urls.MY_LIST}>
          <MyList
            films={films}
          />
        </Route>
        <Route exact path={Urls.MOVIE} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Movie
            film={film}
            films={films}
            reviews={reviews[id]}
          />;
        }}/>
        <Route exact path={Urls.ADD_REVIEW} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <AddReview
            title={film.name}
            poster={film.posterImage}
            backgroundImage={film.backgroundImage}
            id={film.id}
          />;
        }} />
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
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired,
  reviews: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(REVIEW_PROP))).isRequired
};

export default App;
