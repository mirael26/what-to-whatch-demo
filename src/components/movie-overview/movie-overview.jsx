import React from "react";
import PropTypes from "prop-types";

import {findRateDescription} from "../../utils";

const MAX_STARRING = 4;

const MovieOverview = (props) => {
  const {film} = props;
  const rateDescription = findRateDescription(film.rate);

  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rate}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{rateDescription}</span>
        <span className="movie-rating__count">{film.voteCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      {film.description}

      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {film.starring.slice(0, MAX_STARRING).join(`, `)}{film.starring.length > 4 ? ` and other` : ``}</strong></p>
    </div>
  </React.Fragment>);
};

MovieOverview.propTypes = {
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
};

export default MovieOverview;
