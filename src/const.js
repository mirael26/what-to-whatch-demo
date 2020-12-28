const MovieViewType = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const prefix = `/what-to-whatch-demo`;

const AppRoute = {
  MAIN: `${prefix}/`,
  LOGIN: `${prefix}/login`,
  MOVIE: `${prefix}/films`,
  REVIEW: `/review`,
  MY_LIST: `${prefix}/mylist`,
  PLAYER: `${prefix}/player`,
};

const APIRoute = {
  FILMS: `/films`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
};

const FilmRate = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

const FavoriteStatus = {
  ADD: `1`,
  REMOVE: `0`,
};

const ErrorText = {
  MOVIE_NOT_FOUND: `Movie not found`,
  PAGE_NOT_FOUND: `Page not found`,
};

export {MovieViewType, AuthorizationStatus, APIRoute, AppRoute, FilmRate, FavoriteStatus, ErrorText};
