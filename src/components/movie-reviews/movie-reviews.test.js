import React from "react";
import renderer from "react-test-renderer";

import {reviews} from "../../test-mocks";

import {MovieReviews} from "./movie-reviews";

it(`Should MovieReviews render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MovieReviews
          reviews={reviews}
          id={1}
          loadReviews={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
