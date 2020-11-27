import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mocks";

import MovieInfo from "./movie-info";

jest.mock(`../movie-tabs/movie-tabs`, () => `MovieTabs`);
jest.mock(`../movie-overview/movie-overview`, () => `MovieOverview`);
jest.mock(`../movie-details/movie-details`, () => `MovieDetails`);
jest.mock(`../movie-reviews/movie-reviews`, () => `MovieReviews`);


it(`Should MovieInfo render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MovieInfo
          film={films[1]}
          viewType={`overview`}
          onTabClick={noop}
          id={1}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
