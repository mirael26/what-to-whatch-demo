import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {films} from "../../test-mocks";

import {Main} from "./main";

configure({adapter: new Adapter()});

describe(`Main calls callbacks correctly`, () => {
  it(`Click on play button in Main should call callback`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();


    const noop = () => {};

    const wrapper = shallow(
        <Main
          promoFilm={films[1]}
          authorizationStatus={`AUTH`}
          loadPromoFilm={noop}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
        />
    );

    wrapper.find(`.btn--play`).simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Click on my list button in Main should call callback when user is authorized`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();


    const noop = () => {};

    const wrapper = shallow(
        <Main
          promoFilm={films[1]}
          authorizationStatus={`AUTH`}
          loadPromoFilm={noop}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
        />
    );

    wrapper.find(`.btn--list`).simulate(`click`);
    expect(handleFavoriteStatusChange).toHaveBeenCalledTimes(1);
  });

  it(`Click on my list button in Main should call callback when user isn't authorized`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();


    const noop = () => {};

    const wrapper = shallow(
        <Main
          promoFilm={films[1]}
          authorizationStatus={`NO_AUTH`}
          loadPromoFilm={noop}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
        />
    );

    wrapper.find(`.btn--list`).simulate(`click`);
    expect(handleUnauthorizedFavoriteStatusChange).toHaveBeenCalledTimes(1);
  });
});
