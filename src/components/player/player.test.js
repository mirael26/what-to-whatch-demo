import React from "react";
import renderer from "react-test-renderer";

import {films, match} from "../../test-mocks";

import {Player} from "./player";

jest.mock(`../time-bar/time-bar`, () => `TimeBar`);

it(`Should Player render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Player
          currentFilm={films[1]}
          match={match}
          loadCurrentFilm={noop}
          onExitButtonClick={noop}
          isPlaying={false}
          onPlayButtonClick={noop}
          setCurrentTime={noop}
        />
        , {
          createNodeMock: () => {
            return {
              addEventListener: noop,
            };
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
