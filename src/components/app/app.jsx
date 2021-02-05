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

const App = ({moviesCount, title, genre, releaseYear}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            moviesCount={moviesCount}
            title={title}
            genre={genre}
            releaseYear={releaseYear}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Movie />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;
