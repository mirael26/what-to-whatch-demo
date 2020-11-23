const DEFAULT_GENRE = `All genres`;

const getFilmsByGenre = (films, genre) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  const filmsByGenre = films.filter((film) =>film.genre === genre);
  return filmsByGenre;
};

export {getFilmsByGenre};
