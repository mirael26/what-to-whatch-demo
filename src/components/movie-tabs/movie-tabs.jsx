import React from "react";
import PropTypes from "prop-types";

import {MovieViewType} from "../../const";
import {makeFirstUpperCase} from "../../utils";

const MovieTabs = ({viewType, onTabClick}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list" onClick={onTabClick}>
        {Object.values(MovieViewType).map((type, i) =>
          <li className={`movie-nav__item${viewType === type ? ` movie-nav__item--active` : ``}`} key={`${i}-${type}`}>
            <a href="#" className="movie-nav__link" id={type}>{makeFirstUpperCase(type)}</a>
          </li>
        )}
      </ul>
    </nav>
  );

};

MovieTabs.propTypes = {
  viewType: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MovieTabs;
