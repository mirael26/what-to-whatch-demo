import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {login} from "../../store/api-actions";
import {AppRoute} from "../../const";
import {validateLogin, validatePassword} from "../../utils";
import {ActionCreator} from "../../store/action";

const SignInErrorMessage = {
  LOGIN_INVALID: `Please enter a valid email address`,
  PASSWORD_INVALID: `Please enter a valid password`,
  LOGIN_AND_PASSWORD_INVALID: `Please enter a valid email address and password`,
  RECOGNIZE_ERROR: `We can’t recognize this email and password combination. Please try again.`,
};

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.errorMessage = ``;
    this.errorStatus = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginChange(evt) {
    const {onValidLoginChange} = this.props;
    onValidLoginChange(validateLogin(evt.target.value));

    const {resetErrorStatus, errorStatus} = this.props;
    if (errorStatus === true) {
      resetErrorStatus();
    }
  }

  handlePasswordChange(evt) {
    const {onValidPasswordChange} = this.props;
    onValidPasswordChange(validatePassword(evt.target.value));

    const {resetErrorStatus, errorStatus} = this.props;
    if (errorStatus === true) {
      resetErrorStatus();
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {onSubmit} = this.props;

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {
      isFormValid,
      isLoginValid,
      isPasswordValid,
      errorStatus,
    } = this.props;

    this.errorStatus = errorStatus;

    let errorMessage;
    if (!isLoginValid) {
      errorMessage = SignInErrorMessage.LOGIN_INVALID;
    }
    if (!isPasswordValid) {
      errorMessage = SignInErrorMessage.PASSWORD_INVALID;
    }
    if (!isLoginValid && !isPasswordValid) {
      errorMessage = SignInErrorMessage.LOGIN_AND_PASSWORD_INVALID;
    }
    if (errorStatus) {
      errorMessage = SignInErrorMessage.RECOGNIZE_ERROR;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.MAIN} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>

            {errorMessage
              ? <div className="sign-in__message">
                <p>{errorMessage}</p>
              </div>
              : ``}

            <div className="sign-in__fields">
              <div className={`sign-in__field${isLoginValid ? `` : ` sign-in__field--error`}`}>
                <input ref={this.loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={this.handleLoginChange} required={true}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field${isPasswordValid ? `` : ` sign-in__field--error`}`}>
                <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={this.handlePasswordChange} required={true}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" disabled={!isFormValid}>Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  isLoginValid: PropTypes.bool.isRequired,
  isPasswordValid: PropTypes.bool.isRequired,
  onValidLoginChange: PropTypes.func.isRequired,
  onValidPasswordChange: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  resetErrorStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({STATE}) => ({
  errorStatus: STATE.errorStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  resetErrorStatus() {
    dispatch(ActionCreator.updateErrorStatus(false));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
