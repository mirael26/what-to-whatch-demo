import React from "react";
import renderer from "react-test-renderer";

import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import App from "./app";

jest.mock(`../main/main`, () => `Main`);
jest.mock(`../sign-in/sign-in`, () => `SignIn`);
jest.mock(`../my-list/my-list`, () => `MyList`);
jest.mock(`../movie/movie`, () => `Movie`);
jest.mock(`../player/player`, () => `Player`);
jest.mock(`../add-review/add-review`, () => `AddReview`);
jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../error-page/error-page`, () => `ErrorPage`);

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <App/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
