import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {film, renderPlayer} = props;
  const {title, videoSrc, picture} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      {renderPlayer(videoSrc, picture)}
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/1">{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default SmallMovieCard;
