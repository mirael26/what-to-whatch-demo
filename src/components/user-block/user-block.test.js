import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {UserBlock} from "./user-block";

it(`Should UserBlock render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <UserBlock
            authorizationStatus={`AUTH`}
            userAvatarUrl={undefined}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
