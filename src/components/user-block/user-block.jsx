import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const avatarDefault = `img/avatar.jpg`;

const UserBlock = ({isAuthorized, avatarUrl = avatarDefault}) => {
  return (
    <div className="user-block">
      {
        isAuthorized
          ? <div className="user-block__avatar">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
          : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string,
};

export default UserBlock;
