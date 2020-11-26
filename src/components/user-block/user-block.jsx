import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {isAuthorized} from "../../utils";
import {AppRoute} from "../../const";

const AVATAR_DEFAULT_SRC = `img/avatar.jpg`;

const UserBlock = ({authorizationStatus, userAvatarUrl = AVATAR_DEFAULT_SRC}) => {
  const isUserAuthorized = isAuthorized(authorizationStatus);
  return (
    <div className="user-block">
      {
        isUserAuthorized
          ? <div className="user-block__avatar">
            <Link to={AppRoute.MY_LIST}>
              <img src={userAvatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
          : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userAvatarUrl: PropTypes.string,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userAvatarUrl: USER.authorizationInfo.avatar_url,
});

export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);
