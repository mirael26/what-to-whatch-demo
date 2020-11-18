import React from "react";
import PropTypes from "prop-types";

const ShowMore = ({onShowMoreButton}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButton}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreButton: PropTypes.func.isRequired,
};

export default ShowMore;
