import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mocks";

import MovieOverview from "./movie-overview";

it(`Should MovieOverview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview
          film={films[1]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
