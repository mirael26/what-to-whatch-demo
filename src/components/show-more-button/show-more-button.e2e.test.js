import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

it(`Click on showmore button should call callback`, () => {
  const handleShowMoreButton = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        onShowMoreButton={handleShowMoreButton}
      />
  );

  wrapper.find(`button.catalog__button`).simulate(`click`);
  expect(handleShowMoreButton).toHaveBeenCalledTimes(1);
});
