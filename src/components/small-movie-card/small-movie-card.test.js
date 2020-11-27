import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {films} from "../../test-mocks";

import SmallMovieCard from "./small-movie-card";

it(`Should SmallMovieCard render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <SmallMovieCard
            film={films[1]}
            renderPlayer={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
