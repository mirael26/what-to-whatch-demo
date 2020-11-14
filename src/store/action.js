export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  UPDATE_AUTHORIZATION: `UPDATE_AUTHORIZATION`,
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
  updateAuthorization: (status) => ({
    type: ActionType.UPDATE_AUTHORIZATION,
    payload: status,
  }),
};
