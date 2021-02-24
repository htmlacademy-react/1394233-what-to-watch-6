import React from 'react';
import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import {FiltersType, MoviesAmmount} from '../../consts';
import {MOVIES_PROP} from '../../utils/validate';
import {connect} from 'react-redux';

const filterMovies = (movies, genre) => genre === FiltersType.ALL ? movies : movies.filter((movie) => movie.genre === genre);

const Main = ({films, promoMovie, genre}) => {
  return (
    <React.Fragment>
      <PromoMovie
        promoMovie={promoMovie}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            genre={genre}
          />
          <MoviesList
            films={filterMovies(films, genre)}
            maxFilms={MoviesAmmount.MAIN_PAGE}
          />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});


Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired,
  genre: PropTypes.string.isRequired
};

export {Main};
export default connect(mapStateToProps, null)(Main);
