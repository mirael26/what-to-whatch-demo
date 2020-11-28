import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withUserReview from "./with-user-review";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserReview(MockComponent);

describe(`withUserReview should work correctly`, () => {
  it(`withUserReview should change rate and text`, () => {
    const noop = () => {};

    const wrapper = shallow(<MockComponentWrapped
      currentRate={0}
      reviewText={``}
      onFormSubmit={noop}
      isDisabled={true}
      onSubmit={noop}
      onInputChange={noop}
    />);

    const rateMock = {
      target: {
        value: 3,
      }
    };

    expect(wrapper.props().currentRate).toEqual(0);

    wrapper.props().onRateChange(rateMock);
    expect(wrapper.props().currentRate).toEqual(3);

    const textMock = {
      target: {
        value: `d`,
      }
    };

    expect(wrapper.props().reviewText).toEqual(``);

    wrapper.props().onTextChange(textMock);
    expect(wrapper.props().reviewText).toEqual(`d`);
  });

  it(`withUserReview should block form if rate or text is invalid`, () => {
    const noop = () => {};

    const wrapper = shallow(<MockComponentWrapped
      currentRate={0}
      reviewText={``}
      onFormSubmit={noop}
      isDisabled={true}
      onSubmit={noop}
      onInputChange={noop}
    />);

    const textMock = {
      target: {
        value: `d`,
      }
    };

    wrapper.props().onTextChange(textMock);
    expect(wrapper.props().isDisabled).toEqual(true);
  });

  it(`withUserReview should unblock form if text and rate are valid`, () => {
    const noop = () => {};

    const wrapper = shallow(<MockComponentWrapped
      currentRate={0}
      reviewText={``}
      onRateChange
      onTextChange
      onFormSubmit={noop}
      isDisabled={true}
      onSubmit={noop}
      onInputChange={noop}
    />);

    const rateMock = {
      target: {
        value: 3,
      }
    };

    wrapper.props().onRateChange(rateMock);

    const textMock = {
      target: {
        value: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      }
    };

    wrapper.props().onTextChange(textMock);
    expect(wrapper.props().isDisabled).toEqual(false);
  });
});
