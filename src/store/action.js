export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_USER_INFO: `LOAD_USER_INFO`,
  UPDATE_AUTHORIZATION: `UPDATE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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
  })
};
