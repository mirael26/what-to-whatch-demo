import React from "react";
import renderer from "react-test-renderer";

import withActiveControl from "./with-active-control";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withActiveControl(MockComponent);

it(`Should withActiveControl render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MockComponentWrapped
          isPlaying={false}
          onPlayButtonClick={noop}
          isFullscreen={false}
          onFullScreenButtonClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
