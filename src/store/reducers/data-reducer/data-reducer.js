import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";


const initialState = {
  films: [],
  currentFilm: {},
  reviews: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

export {dataReducer};
