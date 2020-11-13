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

  delete film.name;
  delete film.released;
  delete film.preview_image;
  delete film.poster_image;
  delete film.background_image;
  delete film.background_color;
  delete film.rating;
  delete film.scores_count;
  delete film.run_time;
  delete film.video_link;
  delete film.preview_video_link;
  delete film.is_favorite;

  return adaptedFilm;
};

// adaptToClient ключи в кавычках

const adaptGenre = (genre) => {
  switch (genre) {
    case `Action`:
      return ``;
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
