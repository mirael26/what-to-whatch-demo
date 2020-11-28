import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withViewType from "./with-view-type";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withViewType(MockComponent);

it(`withViewType should change view type`, () => {
  const wrapper = shallow(<MockComponentWrapped
    viewType={`ovewrivew`}
    onTabClick
  />);

  const mockEvt = {
    preventDefault() {},
    target: {
      id: `reviews`,
    }
  };

  wrapper.props().onTabClick(mockEvt);
  expect(wrapper.state().viewType).toEqual(`reviews`);
});
