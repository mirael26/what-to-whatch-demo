import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {SignIn} from "./sign-in";

it(`Should SignIn render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <SignIn
            onSubmit={noop}
            isFormValid={true}
            isLoginValid={true}
            isPasswordValid={true}
            onValidLoginChange={noop}
            onValidPasswordChange={noop}
            errorStatus={false}
            resetErrorStatus={noop}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
