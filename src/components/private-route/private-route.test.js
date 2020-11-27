import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {PrivateRoute} from "./private-route";

it(`Should PrivateRoute render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <PrivateRoute
            authorizationStatus={`auth`}
            exact={true}
            path={`/mylist`}
            render={noop}
            statusRequired={`auth`}
            redirectPath={`/login`}
          />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
