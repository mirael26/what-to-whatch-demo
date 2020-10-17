import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };
    this.onMovieCardHover = this.onMovieCardHover.bind(this);
  }

  onMovieCardHover(evt) {
    evt.preventDefault();
    this.setState({
      activeCard: evt.target
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film, i) =>
            <SmallMovieCard
              key={`${i}-${film.title}`}
              film={film}
              onMovieCardHover={this.onMovieCardHover}
            />
          )
        }
      </div>
    );
  }
}

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
    video: PropTypes.string.isRequired,
  })).isRequired,
};

export default MoviesList;
