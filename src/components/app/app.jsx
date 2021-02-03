import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({moviesCount, title, genre, releaseYear}) => {

  return (
    <Main
      moviesCount={moviesCount}
      title={title}
      genre={genre}
      releaseYear={releaseYear}
    />
  );
};

App.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;
