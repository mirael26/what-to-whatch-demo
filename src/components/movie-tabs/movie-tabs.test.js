import React from "react";
import renderer from "react-test-renderer";

import MovieTabs from "./movie-tabs";

it(`Should MovieTabsrender correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MovieTabs
          viewType={`overview`}
          onTabClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
