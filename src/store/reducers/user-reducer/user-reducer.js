import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_INFO:
      return extend(state, {
        authorizationInfo: action.payload,
      });
    default:
      return state;
  }
};

export {userReducer};
