import React from "react";
import renderer from "react-test-renderer";

import Preview from "./preview";

it(`Should Preview render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Preview
          onVideoMouseOver={noop}
          onVideoMouseOut={noop}
        />
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
