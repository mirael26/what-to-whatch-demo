const MovieViewType = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MOVIE: `/films`,
  REVIEW: `/review`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`,
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
  DELETE: `0`,
};

export {MovieViewType, AuthorizationStatus, APIRoute, AppRoute, FilmRate, FavoriteStatus};
