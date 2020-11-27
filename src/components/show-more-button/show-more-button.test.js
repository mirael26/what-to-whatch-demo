import React from "react";
import renderer from "react-test-renderer";

import ShowMoreButton from "./show-more-button";

it(`Should ShowMoreButton render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <ShowMoreButton
          onShowMoreButton={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
