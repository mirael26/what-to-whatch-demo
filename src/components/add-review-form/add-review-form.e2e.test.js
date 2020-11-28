import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddReviewForm from "./add-review-form";

configure({adapter: new Adapter()});

describe(`Rate form should calls callbacks`, () => {
  it(`Rate input change should call callback`, () => {
    const handleRateInputChange = jest.fn();
    const handleTextInputChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          onRateChange={handleRateInputChange}
          onTextChange={handleTextInputChange}
          onFormSubmit={handleFormSubmit}
          currentRate={0}
          reviewText={``}
          isDisabled={false}
          background={`#ffffff`}
          errorStatus={false}
        />
    );

    const evt = {
      preventDefault() {},
      target: {
        value: 1,
        checked: false,
      }
    };

    wrapper.find(`#star-1`).simulate(`change`, evt);
    expect(handleRateInputChange).toHaveBeenCalledTimes(1);
  });

  it(`Text input change should call callback`, () => {
    const handleRateInputChange = jest.fn();
    const handleTextInputChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          onRateChange={handleRateInputChange}
          onTextChange={handleTextInputChange}
          onFormSubmit={handleFormSubmit}
          currentRate={0}
          reviewText={``}
          isDisabled={false}
          background={`#ffffff`}
          errorStatus={false}
        />
    );

    const evt = {
      preventDefault() {},
      target: {
        value: `df`,
      }
    };

    wrapper.find(`.add-review__textarea`).simulate(`change`, evt);
    expect(handleTextInputChange).toHaveBeenCalledTimes(1);
  });

  it(`Form submit should call callback`, () => {
    const handleRateInputChange = jest.fn();
    const handleTextInputChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <AddReviewForm
          onRateChange={handleRateInputChange}
          onTextChange={handleTextInputChange}
          onFormSubmit={handleFormSubmit}
          currentRate={0}
          reviewText={``}
          isDisabled={false}
          background={`#ffffff`}
          errorStatus={false}
        />
    );

    const evt = {
      preventDefault() {},
    };

    wrapper.find(`.add-review__form`).simulate(`submit`, evt);
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
