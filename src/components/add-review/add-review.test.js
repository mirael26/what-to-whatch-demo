import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {films, match} from "../../test-mocks";

import {AddReview} from "./add-review";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../add-review-form/add-review-form`, () => `AddReviewForm`);

it(`Should AddReview render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <AddReview
            currentFilm={films[1]}
            match={match}
            errorStatus={false}
            loadCurrentFilm={noop}
            resetErrorStatus={noop}
            onSubmit={noop}
            loadingErrorStatus={false}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
