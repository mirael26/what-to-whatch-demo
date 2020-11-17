import React from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import {MovieViewTypes} from "../../const";
import {makeFirstUpperCase} from "../../utils";

const MovieInfo = (props) => {
  const {
    film,
    viewType,
    onViewNavClick,
    id,
  } = props;

  let movieComponent;
  switch (viewType) {
    case MovieViewTypes.DETAILS:
      movieComponent = <MovieDetails film={film} />;
      break;
    case MovieViewTypes.REVIEWS:
      movieComponent = <MovieReviews id={id}/>;
      break;
    default:
      movieComponent = <MovieOverview film={film} />;
      break;
  }

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list" onClick={onViewNavClick}>
          {Object.values(MovieViewTypes).map((type, i) =>
            <li className={`movie-nav__item${viewType === type ? ` movie-nav__item--active` : ``}`} key={`${i}-${type}`}>
              <a href="#" className="movie-nav__link" id={type}>{makeFirstUpperCase(type)}</a>
            </li>
          )}
        </ul>
      </nav>

      {movieComponent}
    </div>
  );
};

MovieInfo.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundPicture: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
  }).isRequired,
  viewType: PropTypes.string.isRequired,
  onViewNavClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieInfo;
