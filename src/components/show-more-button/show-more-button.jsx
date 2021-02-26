import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
};

// GenreTab.propTypes = {
//   onChangeGenres: PropTypes.func.isRequired,
//   genre: PropTypes.string.isRequired,
//   tab: PropTypes.string.isRequired
// };

// const mapStateToProps = ({genre}) => ({
//   genre,
// });

// export {GenreTab};
// export default connect(mapStateToProps)(GenreTab);

export default ShowMoreButton;
