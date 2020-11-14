import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {adaptToClient} from "./adapter";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map(adaptToClient))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.updateAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .then(() => dispatch(ActionCreator.redirectToRoute(APIRoute.RESULT)))
// );

export {fetchFilmsList, checkAuth};
