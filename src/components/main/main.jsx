import React from 'react';
import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import {MoviesAmmount} from '../../consts';
import {MOVIES_PROP} from '../../utils/validate';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Main = ({films, promoMovie}) => {
  return (
    <React.Fragment>
      <PromoMovie
        promoMovie={promoMovie}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          {/* <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul> */}
          <MoviesList
            films={films}
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

const mapDispatchToProps = (dispatch) => ({
  onChangeComedies() {
    dispatch(ActionCreator.changeComedies());
  },
  onChangeCrime() {
    dispatch(ActionCreator.changeCrime());
  },
  onChangeDramas() {
    dispatch(ActionCreator.changeDramas());
  },
  onChangeDocumentary() {
    dispatch(ActionCreator.changeDocumentary());
  },
  onChangeHorror() {
    dispatch(ActionCreator.changeHorror());
  },
  onChangeKidsFamily() {
    dispatch(ActionCreator.changeKidsFamily());
  },
  onChangeRomance() {
    dispatch(ActionCreator.changeRomance());
  },
  onChangeSciFi() {
    dispatch(ActionCreator.changeSciFi());
  },
  onChangeThrillers() {
    dispatch(ActionCreator.changeThrillers());
  },
  onChangeAll() {
    dispatch(ActionCreator.changeAll());
  },
});

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
