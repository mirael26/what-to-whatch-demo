import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mocks";

import MovieDetails from "./movie-details";

it(`Should MovieDetails render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails
          film={films[1]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
