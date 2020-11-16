import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {adaptFilmToClient} from "./adapter";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
);

const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((currentFilm) => dispatch(ActionCreator.loadCurrentFilm(currentFilm)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.loadUserInfo(data)))
    .then(() => dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export {fetchFilmsList, fetchCurrentFilm, checkAuth, login};
