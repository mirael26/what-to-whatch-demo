import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPreview from "../../hocs/with-video-preview/with-video-preview";

const SmallMovieCardWrapped = withVideoPreview(SmallMovieCard);

const MoviesList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {
        films.map((film, i) =>
          <SmallMovieCardWrapped
            key={`${i}-${film.title}`}
            film={film}
          />
        )
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default MoviesList;
