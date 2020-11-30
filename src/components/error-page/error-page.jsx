import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";

const ErrorPage = ({errorText}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <h2 className="page-title user-page__title" style={{top: `23%`}}>{errorText}</h2>
      <div className="sign-in user-page__content">
        <div className="sign-in__submit">
          <Link to={AppRoute.MAIN} className="sign-in__btn">Go to the main page</Link>
        </div>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

ErrorPage.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export default ErrorPage;
