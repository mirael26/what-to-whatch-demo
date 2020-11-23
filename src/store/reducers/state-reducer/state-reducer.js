import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";

const DEFAULT_GENRE = `All genres`;

const initialState = {
  genre: DEFAULT_GENRE,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const newGenre = action.payload;
      if (newGenre === state.genre) {
        return state;
      }
      return extend(state, {
        genre: newGenre
      });
    default:
      return state;
  }
};

export {stateReducer};
