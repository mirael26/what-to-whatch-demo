import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withValidity from "./with-validity";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withValidity(MockComponent);

it(`withValidity should change valid status`, () => {
  const wrapper = shallow(<MockComponentWrapped
    isFormValid={false}
    isLoginValid={true}
    isPasswordValid={false}
  />);

  wrapper.props().onValidLoginChange(false);
  expect(wrapper.state().isLoginValid).toEqual(false);

  wrapper.props().onValidPasswordChange(true);
  expect(wrapper.state().isPasswordValid).toEqual(true);
});

it(`withValidity should change form valid status`, () => {
  const wrapper = shallow(<MockComponentWrapped
    isFormValid={false}
    isLoginValid={true}
    isPasswordValid={true}
  />);

  wrapper.props().onValidLoginChange(true);
  wrapper.props().onValidPasswordChange(true);
  expect(wrapper.state().isFormValid).toEqual(true);
});
