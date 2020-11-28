import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieTabs from "./movie-tabs";

configure({adapter: new Adapter()});

test(`Click on tab button should call callback`, () => {
  const handleTabClick = jest.fn();

  const wrapper = shallow(
      <MovieTabs
        viewType={`overview`}
        onTabClick={handleTabClick}
      />
  );

  const evt = {
    preventDefault() {},
    target: {
      id: `reviews`,
    }
  };

  wrapper.find(`.movie-nav__list`).simulate(`click`, evt);
  expect(handleTabClick).toHaveBeenCalledTimes(1);
});
