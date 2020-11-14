import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import {adaptToClient} from "./adapter";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map(adaptToClient))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
);

export {fetchFilmsList};
