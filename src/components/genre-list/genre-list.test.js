import React from "react";
import renderer from "react-test-renderer";

import {genres} from "../../test-mocks";

import GenreList from "./genre-list";

it(`Should GenreList render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <GenreList
          genres={genres}
          activeGenre={genres[1]}
          onChangeGenre={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
