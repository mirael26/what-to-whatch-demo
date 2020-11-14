import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UserBlock = ({isAuthorized}) => {
  return (
    <div className="user-block">
      {
        isAuthorized
          ? <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
          : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default UserBlock;
