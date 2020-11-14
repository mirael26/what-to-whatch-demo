import {combineReducers} from "redux";
import {stateReducer} from "./state-reducer/state-reducer";
import {dataReducer} from "./data-reducer/data-reducer";
import {userReducer} from "./user-reducer/user-reducer";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.STATE]: stateReducer,
  [NameSpace.USER]: userReducer,
});
