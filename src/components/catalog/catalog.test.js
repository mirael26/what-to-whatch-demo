import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {films, genres} from "../../test-mocks";

import {Catalog} from "./catalog";

jest.mock(`../genre-list/genre-list`, () => `GenreList`);
jest.mock(`../movies-list/movies-list`, () => `MoviesList`);
jest.mock(`../show-more-button/show-more-button`, () => `ShowMoreButton`);


it(`Should Catalog render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Catalog
            filmsByGenre={films}
            genres={genres}
            genre={genres[1]}
            onChangeGenre={noop}
            filmsCount={9}
            onShowMoreButtonClick={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
