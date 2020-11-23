const MovieViewTypes = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const APIRoute = {
  FILMS: `/films`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
};

const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MOVIE: `/films`,
  REVIEW: `/review`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`,
};

const FilmRates = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export {MovieViewTypes, AuthorizationStatus, APIRoute, AppRoute, FilmRates};
