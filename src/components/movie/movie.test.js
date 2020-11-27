import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {films, match} from "../../test-mocks";

import {Movie} from "./movie";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../movies-list/movies-list`, () => `MoviesList`);
jest.mock(`../movie-info/movie-info`, () => `MovieInfo`);

it(`Should Movie render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Movie
            films={films}
            currentFilm={films[1]}
            match={match}
            loadCurrentFilm={noop}
            authorizationStatus={`AUTH`}
            onPlayerButtonClick={noop}
            changeFavoriteStatus={noop}
            onUnauthorizedFavoriteClick={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
