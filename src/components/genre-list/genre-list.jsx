import React from "react";
import PropTypes from "prop-types";

const ALL_GENRES = `All genres`;
const GENRE_LINK_CLASS = `catalog__genres-link`;

const GenreList = (props) => {
  const {
    genres,
    activeGenre,
    onChangeGenre,
  } = props;

  const handleGenreClick = (evt) => {
    evt.preventDefault();
    if (evt.target.className !== GENRE_LINK_CLASS) {
      return;
    }
    onChangeGenre(evt.target.id);
  };

  const genreList = genres.slice();
  genreList.unshift(ALL_GENRES);

  return (
    <ul className="catalog__genres-list" onClick={handleGenreClick}>
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
