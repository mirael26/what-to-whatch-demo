import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import ErrorPage from "./error-page";

it(`Should ErrorPage render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <ErrorPage
            errorText={``}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
