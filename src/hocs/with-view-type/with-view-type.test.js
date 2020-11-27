import React from "react";
import renderer from "react-test-renderer";

import withViewType from "./with-view-type";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withViewType(MockComponent);

it(`Should withViewType render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MockComponentWrapped
          viewType={`overview`}
          onTabClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
