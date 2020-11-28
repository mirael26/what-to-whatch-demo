import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Preview from "./preview";

configure({adapter: new Adapter()});

it(`When mouse moves over and out Preview should call callback`, () => {
  const handleCardMouseOver = jest.fn();
  const handleCardMouseOut = jest.fn();

  const wrapper = shallow(
      <Preview
        onVideoMouseOver={handleCardMouseOver}
        onVideoMouseOut={handleCardMouseOut}
      />
  );

  wrapper.find(`.small-movie-card__image`).simulate(`mouseover`);
  wrapper.find(`.small-movie-card__image`).simulate(`mouseout`);
  expect(handleCardMouseOver).toHaveBeenCalledTimes(1);
  expect(handleCardMouseOut).toHaveBeenCalledTimes(1);
});
