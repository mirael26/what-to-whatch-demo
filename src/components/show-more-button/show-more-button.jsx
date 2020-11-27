import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({onShowMoreButton}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButton}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButton: PropTypes.func.isRequired,
};

export default ShowMoreButton;
