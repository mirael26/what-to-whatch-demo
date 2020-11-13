import {extend} from "../utils";
import {GenreTypes} from "../const";
import {ActionType} from "../store/action";


const initialState = {
  genre: GenreTypes.ALL_GENRES,
  films: [],
  filmsByGenre: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const newGenre = action.payload;
      if (newGenre === state.genre) {
        return state;
      }
      return extend(state, {
        genre: newGenre
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
        filmsByGenre: action.payload,
      });
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
