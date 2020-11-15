import {extend} from "../utils";

const adaptToClient = (film) => {
  const adaptedFilm = extend(
      film,
      {
        title: film.name,
        releaseDate: film.released,
        picture: film.preview_image,
        poster: film.poster_image,
        backgroundPicture: film.background_image,
        backgroundColor: film.background_color,
        rate: film.rating,
        voteCount: film.scores_count,
        runTime: film.run_time,
        videoSrc: film.video_link,
        previewVideoSrc: film.preview_video_link,
        isFavorite: film.is_favorite,
        genre: adaptGenre(film.genre)
      }
  );

  delete adaptedFilm.name;
  delete adaptedFilm.released;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.rating;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};

// adaptToClient ключи в кавычках

const adaptGenre = (genre) => {
  switch (genre) {
    case `Drama`:
      return `Dramas`;
    case `Comedy`:
      return `Comedies`;
    case `Thriller`:
      return `Thrillers`;
    default:
      return genre;
  }
};

export {adaptToClient};
