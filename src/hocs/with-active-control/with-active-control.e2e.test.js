import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveControl from "./with-active-control";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveControl(MockComponent);

it(`withActiveControl should change isPlaying`, () => {
  const wrapper = shallow(<MockComponentWrapped
    isPlaying={false}
  />);

  expect(wrapper.state().isPlaying).toEqual(false);

  wrapper.props().onPlayButtonClick();
  expect(wrapper.state().isPlaying).toEqual(true);
});
