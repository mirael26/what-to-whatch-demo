import React from "react";
import PropTypes from "prop-types";

const ALL_GENRES = `All genres`;

const GenreList = (props) => {
  const {
    genres,
    activeGenre,
    onChangeGenre,
  } = props;

  const onGenreClick = (evt) => {
    evt.preventDefault();
    onChangeGenre(evt.target.id);
  };

  const genreList = genres.slice();
  genreList.unshift(ALL_GENRES);

  return (
    <ul className="catalog__genres-list" onClick={onGenreClick}>
      {genreList.map((genre, i) =>
        <li key={`genre-${i}`} className={`catalog__genres-item${activeGenre === genre ? ` catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" id={genre}>{genre}</a>
        </li>
      )}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

export default GenreList;
