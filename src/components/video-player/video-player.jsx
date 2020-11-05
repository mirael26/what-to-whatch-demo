import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {
    onVideoMouseOver,
    onVideoMouseOut,
    children
  } = props;

  return (
    <div className="small-movie-card__image" onMouseOver={onVideoMouseOver} onMouseOut={onVideoMouseOut}>
      {children}
    </div>
  );
};

VideoPlayer.propTypes = {
  onVideoMouseOver: PropTypes.func.isRequired,
  onVideoMouseOut: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default VideoPlayer;
