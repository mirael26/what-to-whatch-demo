import {ActionCreator} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import {adaptFilmToClient, adaptReviewToClient} from "./adapter";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => dispatch(ActionCreator.loadPromoFilm(promoFilm)))
);

const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((currentFilm) => dispatch(ActionCreator.loadCurrentFilm(currentFilm)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => data.map(adaptReviewToClient))
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
);

const postReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.REVIEWS}/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.FILMS}/${id}`)));
};

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.loadUserInfo(data)))
    .then(() => dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export {fetchFilmsList, fetchPromoFilm, fetchCurrentFilm, fetchReviews, postReview, checkAuth, login};
