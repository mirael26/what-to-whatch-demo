import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import browserHistory from "../../browser-history";

import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

describe(`Login form should calls all callbacks`, () => {
  it(`Login input change should call callback`, () => {
    const handleValidLoginChange = jest.fn();
    const handleValidPasswordChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <SignIn
          onSubmit={handleFormSubmit}
          isFormValid={true}
          isLoginValid={true}
          isPasswordValid={true}
          onValidLoginChange={handleValidLoginChange}
          onValidPasswordChange={handleValidPasswordChange}
          errorStatus={false}
          resetErrorStatus={() => {}}
        />
    );

    const mockEvt = {
      target: {
        value: `dsf`,
      }
    };

    wrapper.find(`#user-email`).simulate(`change`, mockEvt);
    expect(handleValidLoginChange).toHaveBeenCalledTimes(1);
  });
  it(`Password input change should call callback`, () => {
    const handleValidLoginChange = jest.fn();
    const handleValidPasswordChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = shallow(
        <SignIn
          onSubmit={handleFormSubmit}
          isFormValid={true}
          isLoginValid={true}
          isPasswordValid={true}
          onValidLoginChange={handleValidLoginChange}
          onValidPasswordChange={handleValidPasswordChange}
          errorStatus={false}
          resetErrorStatus={() => {}}
        />
    );

    const mockEvt = {
      target: {
        value: `dsf`,
      }
    };

    wrapper.find(`#user-password`).simulate(`change`, mockEvt);
    expect(handleValidPasswordChange).toHaveBeenCalledTimes(1);
  });
  it(`Form submit should call callback if login and password is inputed`, () => {

    const handleValidLoginChange = jest.fn();
    const handleValidPasswordChange = jest.fn();
    const handleFormSubmit = jest.fn();

    const wrapper = mount(
        <Router history={browserHistory}>
          <SignIn
            onSubmit={handleFormSubmit}
            isFormValid={true}
            isLoginValid={true}
            isPasswordValid={true}
            onValidLoginChange={handleValidLoginChange}
            onValidPasswordChange={handleValidPasswordChange}
            errorStatus={false}
            resetErrorStatus={() => {}}
          />
        </Router>
    );
    const loginMockEvt = {
      target: {
        value: `dsf@mail.ru`,
      }
    };

    const passwordMockEvt = {
      target: {
        value: `dsf`,
      }
    };

    const mockEvt = {
      preventDefault() {},
    };

    wrapper.find(`#user-email`).simulate(`change`, loginMockEvt);
    wrapper.find(`#user-password`).simulate(`change`, passwordMockEvt);

    wrapper.find(`.sign-in__form`).simulate(`submit`, mockEvt);
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
