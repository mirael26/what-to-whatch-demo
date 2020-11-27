import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mocks";

import MoviesList from "./movies-list";

jest.mock(`../small-movie-card/small-movie-card`, () => `SmallMovieCard`);

it(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          films={films}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
