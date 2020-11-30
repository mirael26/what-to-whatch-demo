
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../services/api";

import {
  fetchFilmsList,
  fetchPromoFilm,
  fetchCurrentFilm,
  fetchReviews,
  postReview,
  checkAuth,
  login,
  fetchFavoriteFilms,
  postFavoriteStatus
} from "./api-actions";
import {ActionType} from "./action";
import {APIRoute} from "../const";
import {filmFromServer, reviewsFromServer, userInfoFromServer} from "../test-mocks";
import {adaptFilmToClient, adaptReviewToClient, adaptUserInfoToClient} from "./adapter";

const api = createAPI(() => {});

describe(`Api-actions should work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, filmFromServer);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: adaptFilmToClient(filmFromServer),
        });
      });
  });
  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const currentFilmLoader = fetchCurrentFilm(1);

    apiMock
      .onGet(`${APIRoute.FILMS}/1`)
      .reply(200, filmFromServer);

    return currentFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CURRENT_FILM,
          payload: adaptFilmToClient(filmFromServer),
        });
      });
  });
  it(`Should make a correct API call to /comments/:film_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(1);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, reviewsFromServer);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: reviewsFromServer.map(adaptReviewToClient),
        });
      });
  });
  it(`Should make a correct API call post to /comments/:film_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewSender = postReview(1, {rate: 1, text: `1`});

    apiMock
      .onPost(`${APIRoute.REVIEWS}/1`)
      .reply(200, reviewsFromServer);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/1`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_ERROR_STATUS,
          payload: false,
        });
      });
  });
  it(`Should make a correct API call post to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteSender = postFavoriteStatus(1, 1);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, filmFromServer);

    return favoriteSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorizationLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, userInfoFromServer);

    return authorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_INFO,
          payload: adaptUserInfoToClient(userInfoFromServer),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_AUTHORIZATION,
          payload: `AUTH`,
        });
      });
  });
  it(`Should make a correct API call post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginSender = login({login: `capricorn_26@mail.ru`, password: `p`});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, userInfoFromServer);

    return loginSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_INFO,
          payload: adaptUserInfoToClient(userInfoFromServer),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_AUTHORIZATION,
          payload: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`,
        });
      });
  });
});
