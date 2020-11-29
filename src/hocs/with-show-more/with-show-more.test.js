import React from "react";
import renderer from "react-test-renderer";

import withShowMore from "./with-show-more";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withShowMore(MockComponent);

it(`Should withShowMore render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MockComponentWrapped
          filmsCount={6}
          onShowMoreButtonClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
