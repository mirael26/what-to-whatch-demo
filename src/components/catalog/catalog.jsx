import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {getFilmsByGenre} from "../../store/selectors";

import GenreList from "../genre-list/genre-list";
import MoviesList from "../movies-list/movies-list";
import ShowMore from "../show-more-button/show-more-button.jsx";


const Catalog = (props) => {
  const {
    filmsByGenre,
    genre,
    onChangeGenre,
    filmsCount,
    onShowMoreButton,
  } = props;

  const isAllFilmsShown = filmsCount >= filmsByGenre.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList
        activeGenre={genre}
        onChangeGenre={onChangeGenre}
      />

      <MoviesList films={filmsByGenre.slice(0, filmsCount)}/>

      {isAllFilmsShown ? null : <ShowMore onShowMoreButton={onShowMoreButton} />}
    </section>
  );
};

Catalog.propTypes = {
  filmsByGenre: PropTypes.arrayOf(PropTypes.shape({
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
  genre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  onShowMoreButton: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  genre: STATE.genre,
  filmsByGenre: getFilmsByGenre(DATA.films, STATE.genre),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
