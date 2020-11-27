import React from "react";
import renderer from "react-test-renderer";

import {reviews} from "../../test-mocks";

import withUserReview from "./with-user-review";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withUserReview(MockComponent);

it(`Should withUserReview render correctly`, () => {
  const noop = () => {};
  const review = reviews[1];
  const tree = renderer
    .create(
        <MockComponentWrapped
          currentRate={review.rate}
          reviewText={review.text}
          onRateChange={noop}
          onTextChange={noop}
          onFormSubmit={noop}
          isDisabled={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
