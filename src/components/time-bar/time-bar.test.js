import React from "react";
import renderer from "react-test-renderer";

import {TimeBar} from "./time-bar";

it(`Should TimeBar render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <TimeBar
          currentTime={0}
          runTime={3000}
          onTimeChange={noop}
          onPlayModeChange={noop}
          isPlaying={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
