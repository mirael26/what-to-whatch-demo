import {stateReducer} from "./state-reducer";
import {ActionType} from "../../action";

describe(`State-reducers should work correctly`, () => {
  it(`State-reducer without additional parameters should return initial state`, () => {
    expect(stateReducer(void 0, {})).toEqual({
      genre: `All genres`,
      playerTime: 0,
      errorStatus: false,
      loadingErrorStatus: false,
    });
  });
  it(`Reducer should update genre with received genre`, () => {
    expect(stateReducer({
      genre: `All genres`,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    })).toEqual({
      genre: `Comedy`,
    });
  });
  it(`Reducer should update player time`, () => {
    expect(stateReducer({
      playerTime: 0,
    }, {
      type: ActionType.SET_PLAYER_TIME,
      payload: 50,
    })).toEqual({
      playerTime: 50,
    });
  });
  it(`Reducer should update error status`, () => {
    expect(stateReducer({
      errorStatus: false,
    }, {
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: true,
    })).toEqual({
      errorStatus: true,
    });
  });
  it(`Reducer should update loading error status`, () => {
    expect(stateReducer({
      loadingErrorStatus: false,
    }, {
      type: ActionType.UPDATE_LOADING_ERROR_STATUS,
      payload: true,
    })).toEqual({
      loadingErrorStatus: true,
    });
  });
});
