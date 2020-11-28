import {userReducer} from "./user-reducer";
import {ActionType} from "../../action";
import {userInfo} from "../../../test-mocks";

describe(`User-reducers should work correctly`, () => {
  it(`State-reducer without additional parameters should return initial state`, () => {
    expect(userReducer(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`,
      authorizationInfo: {},
    });
  });
  it(`Reducer should update authorization`, () => {
    expect(userReducer({
      authorizationStatus: `NO_AUTH`,
    }, {
      type: ActionType.UPDATE_AUTHORIZATION,
      payload: `AUTH`,
    })).toEqual({
      authorizationStatus: `AUTH`,
    });
  });
  it(`Reducer should update user info by loading it`, () => {
    expect(userReducer({
      authorizationInfo: {},
    }, {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo,
    })).toEqual({
      authorizationInfo: userInfo,
    });
  });
});
