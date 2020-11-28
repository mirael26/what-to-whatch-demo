import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {TimeBar} from "./time-bar";

configure({adapter: new Adapter()});

it(`Changing time when player is plaing should call callback`, () => {
  const handleTimeChange = jest.fn();
  const handlePlayModeChange = jest.fn();

  const wrapper = shallow(
      <TimeBar
        currentTime={5}
        runTime={5400}
        onTimeChange={handleTimeChange}
        onPlayModeChange={handlePlayModeChange}
        isPlaying={true}
      />
  );

  const mockEvt = {
    preventDefault() {},
    clientX: 55,
  };

  wrapper.find(`.player__toggler`).simulate(`mousedown`, mockEvt);
  expect(handlePlayModeChange).toHaveBeenCalledTimes(1);
});
