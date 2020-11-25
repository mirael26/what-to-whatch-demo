import {extend} from "../utils";

const adaptFilmToClient = (film) => {
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

const adaptReviewToClient = (review) => {
  const adaptedReview = extend(
      review,
      {
        text: review.comment,
        rate: review.rating,
        author: review.user.name,
      }
  );

  delete adaptedReview.comment;
  delete adaptedReview.raiting;
  delete adaptedReview.user;

  return adaptedReview;
};

export {adaptFilmToClient, adaptReviewToClient};
