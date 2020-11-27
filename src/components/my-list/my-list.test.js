import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {films} from "../../test-mocks";

import {MyList} from "./my-list";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../movies-list/movies-list`, () => `MoviesList`);


it(`Should MyList render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <MyList
            favoriteFilms={films}
            loadFavoriteFilms={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
