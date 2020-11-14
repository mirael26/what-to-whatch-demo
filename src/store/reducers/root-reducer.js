import {combineReducers} from "redux";
import {stateReducer} from "./state-reducer/state-reducer";
import {dataReducer} from "./data-reducer/data-reducer";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.STATE]: stateReducer,
});
