import React from "react";
import renderer from "react-test-renderer";

import withVideoPreview from "./with-video-preview";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withVideoPreview(MockComponent);

it(`Should withVideoPreview render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MockComponentWrapped
          renderPlayer={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
