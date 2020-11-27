import React from "react";
import renderer from "react-test-renderer";

import {reviews, films} from "../../test-mocks";

import AddReviewForm from "./add-review-form";

it(`Should AddReviewForm render correctly`, () => {
  const noop = () => {};
  const review = reviews[1];
  const film = films[1];
  const tree = renderer
    .create(
        <AddReviewForm
          currentRate={review.rate}
          reviewText={review.text}
          onRateChange={noop}
          onTextChange={noop}
          onFormSubmit={noop}
          isDisabled={false}
          background={film.backgroundColor}
          errorStatus={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
