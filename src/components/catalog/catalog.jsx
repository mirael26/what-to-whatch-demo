import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GenreList from "../genre-list/genre-list";
import MoviesList from "../movies-list/movies-list";


const Catalog = (props) => {
  const {
    films,
    genre,
    onChangeGenre
  } = props;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {<GenreList
        activeGenre={genre}
        onChangeGenre={onChangeGenre}
      />}

      {<MoviesList films={films}/>}

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

Catalog.propTypes = {
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
    videoSrc: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
  },
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
