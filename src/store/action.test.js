import {ActionType, ActionCreator} from "./action";
import {films, reviews, genres, userInfo} from "../test-mocks";

const film = films[1];

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    });
  });
  it(`Action creator for loading films returns correct action`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films,
    });
  });
  it(`Action creator for loading favorite film returns correct action`, () => {
    expect(ActionCreator.loadFavoriteFilms(films)).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    });
  });
  it(`Action creator for getting genre's list returns correct action with undefined payload`, () => {
    expect(ActionCreator.getGenresList(genres)).toEqual({
      type: ActionType.GET_GENRES_LIST,
    });
  });
  it(`Action creator for loading promo-film returns correct action`, () => {
    expect(ActionCreator.loadPromoFilm(film)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    });
  });
  it(`Action creator for loading current film returns correct action`, () => {
    expect(ActionCreator.loadCurrentFilm(film)).toEqual({
      type: ActionType.LOAD_CURRENT_FILM,
      payload: film,
    });
  });
  it(`Action creator for loading reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });
  it(`Action creator for loading user info returns correct action`, () => {
    expect(ActionCreator.loadUserInfo(userInfo)).toEqual({
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    });
  });
  it(`Action creator for udpating authorization returns correct action`, () => {
    expect(ActionCreator.updateAuthorization(`auth`)).toEqual({
      type: ActionType.UPDATE_AUTHORIZATION,
      payload: `auth`,
    });
  });
  it(`Action creator for redirect to route returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });
  it(`Action creator for setting player time returns correct action`, () => {
    expect(ActionCreator.setPlayerTime(50)).toEqual({
      type: ActionType.SET_PLAYER_TIME,
      payload: 50,
    });
  });
  it(`Action creator for updating error status returns correct action`, () => {
    expect(ActionCreator.updateErrorStatus(false)).toEqual({
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: false,
    });
  });
});
