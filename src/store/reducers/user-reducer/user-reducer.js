import {extend} from "../../../utils";
import {ActionType} from "../../../store/action";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

export {userReducer};
