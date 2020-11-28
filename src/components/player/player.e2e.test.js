import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {films, match} from "../../test-mocks";

import {Player} from "./player";

configure({adapter: new Adapter()});

jest.mock(`../time-bar/time-bar`, () => `TimeBar`);

describe(`Player should calls callbacks`, () => {
  it(`Click on exit button in Player should call callback`, () => {
    const handleSetCurrentTime = jest.fn();
    const handleExitButtonClick = jest.fn();
    const handlePlayButtonClick = jest.fn();
    const noop = () => {};


    const wrapper = mount(
        <Player
          currentFilm={films[1]}
          match={match}
          loadCurrentFilm={noop}
          onExitButtonClick={handleExitButtonClick}
          isPlaying={false}
          onPlayButtonClick={handlePlayButtonClick}
          setCurrentTime={handleSetCurrentTime}
        />
    );

    const mockEvt = {
      preventDefault() {},
    };

    wrapper.find(`.player__exit`).simulate(`click`, mockEvt);
    expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
  });
});
