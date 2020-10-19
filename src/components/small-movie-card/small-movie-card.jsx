import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {onMovieCardHover, film} = props;
  const {picture, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover}>
      <div className="small-movie-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/1">{film.title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onMovieCardHover: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
