import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withShowMore from "./with-show-more";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withShowMore(MockComponent);

it(`withShowMore should change film's count`, () => {
  const wrapper = shallow(<MockComponentWrapped
    filmsCount={8}
  />);

  expect(wrapper.props().filmsCount).toEqual(8);

  wrapper.props().onShowMoreButtonClick();
  expect(wrapper.props().filmsCount).toEqual(16);
});
