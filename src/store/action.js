export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  GET_GENRES_LIST: `GET_GENRES_LIST`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_CURRENT_FILM: `LOAD_CURRENT_FILM`,
  LOAD_USER_INFO: `LOAD_USER_INFO`,
  UPDATE_AUTHORIZATION: `UPDATE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_PLAYER_TIME: `SET_PLAYER_TIME`,
  UPDATE_ERROR_STATUS: `UPDATE_ERROR_STATUS`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms,
  }),
  getGenresList: (films) => ({
    type: ActionType.GET_GENRES_LIST,
    payload: films,
  }),
  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: promoFilm,
  }),
  loadCurrentFilm: (currentFilm) => ({
    type: ActionType.LOAD_CURRENT_FILM,
    payload: currentFilm,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadUserInfo: (info) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: info,
  }),
  updateAuthorization: (status) => ({
    type: ActionType.UPDATE_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setPlayerTime: (time) => ({
    type: ActionType.SET_PLAYER_TIME,
    payload: time,
  }),
  updateErrorStatus: (status) => ({
    type: ActionType.UPDATE_ERROR_STATUS,
    payload: status,
  })
};
