import {GenreTypes} from "../const";

const getFilmsByGenre = (films, genre) => {
  if (genre === GenreTypes.ALL_GENRES) {
    return films;
  }
  const filmsByGenre = films.filter((film) =>film.genre === genre);
  return filmsByGenre;
};

export {getFilmsByGenre};
