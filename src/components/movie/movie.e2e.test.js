import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {films, match} from "../../test-mocks";

import {Movie} from "./movie";

configure({adapter: new Adapter()});

describe(`Movie calls callbacks correctly`, () => {
  it(`Click on play button in Movie should call callback`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();


    const noop = () => {};

    const wrapper = shallow(
        <Movie
          films={films}
          currentFilm={films[1]}
          match={match}
          loadCurrentFilm={noop}
          authorizationStatus={`AUTH`}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
          loadingErrorStatus={false}
        />
    );

    wrapper.find(`.btn--play`).simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Click on my list button in Movie should call callback when user is authorized`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();

    const noop = () => {};

    const wrapper = shallow(
        <Movie
          films={films}
          currentFilm={films[1]}
          match={match}
          loadCurrentFilm={noop}
          authorizationStatus={`AUTH`}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
          loadingErrorStatus={false}
        />
    );

    wrapper.find(`.btn--list`).simulate(`click`);
    expect(handleFavoriteStatusChange).toHaveBeenCalledTimes(1);
  });

  it(`Click on my list button in Movie should call callback when user isn't authorized`, () => {
    const handlePlayButtonClick = jest.fn();
    const handleFavoriteStatusChange = jest.fn();
    const handleUnauthorizedFavoriteStatusChange = jest.fn();

    const noop = () => {};

    const wrapper = shallow(
        <Movie
          films={films}
          currentFilm={films[1]}
          match={match}
          loadCurrentFilm={noop}
          authorizationStatus={`NO_AUTH`}
          onPlayerButtonClick={handlePlayButtonClick}
          changeFavoriteStatus={handleFavoriteStatusChange}
          onUnauthorizedFavoriteClick={handleUnauthorizedFavoriteStatusChange}
          loadingErrorStatus={false}
        />
    );

    wrapper.find(`.btn--list`).simulate(`click`);
    expect(handleUnauthorizedFavoriteStatusChange).toHaveBeenCalledTimes(1);
  });
});
