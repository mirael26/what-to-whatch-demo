import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mocks";

import {Main} from "./main";

jest.mock(`../catalog/catalog`, () => `Catalog`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);

it(`Should Main render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Main
          promoFilm={films[0]}
          authorizationStatus={`AUTH`}
          loadPromoFilm={noop}
          onPlayerButtonClick={noop}
          changeFavoriteStatus={noop}
          onUnauthorizedFavoriteClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
