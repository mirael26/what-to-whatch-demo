import React from "react";
import renderer from "react-test-renderer";

import withValidity from "./with-validity";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withValidity(MockComponent);

it(`Should withValidity render correctly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <MockComponentWrapped
          isFormValid={true}
          isLoginValid={true}
          isPasswordValid={true}
          onValidLoginChange={noop}
          onValidPasswordChange={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
