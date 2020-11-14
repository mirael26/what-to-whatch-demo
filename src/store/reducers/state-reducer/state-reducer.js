import {extend} from "../../../utils";
import {GenreTypes} from "../../../const";
import {ActionType} from "../../../store/action";

const initialState = {
  genre: GenreTypes.ALL_GENRES,
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
