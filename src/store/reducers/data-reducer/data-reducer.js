import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";


const initialState = {
  films: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    default:
      return state;
  }
};

export {dataReducer};
