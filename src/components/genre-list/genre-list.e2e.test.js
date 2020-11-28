import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {genres} from "../../test-mocks";

import GenreList from "./genre-list";

configure({adapter: new Adapter()});

it(`Click on genre button should call callback`, () => {
  const handleGenreButtonClick = jest.fn();

  const wrapper = shallow(
      <GenreList
        genres={genres}
        activeGenre={genres[0]}
        onChangeGenre={handleGenreButtonClick}
      />
  );

  const evt = {
    preventDefault() {},
    target: {
      className: `catalog__genres-link`,
      id: 1,
    }
  };

  wrapper.last(`.catalog__genres-link`).simulate(`click`, evt);
  expect(handleGenreButtonClick).toHaveBeenCalledTimes(1);
});
