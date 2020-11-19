import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AppRoute} from "../../const";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import Player from "../player/player";
import AddReview from "../add-review/add-review";
import PrivateRoute from "../private-route/private-route";

const App = (props) => {
  const {promoFilm, films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            promoFilm={promoFilm}
          />
        </Route>
        <Route path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={films} />}
        />
        <Route
          exact
          path={`${AppRoute.MOVIE}/:id`}
          render={(routerProps) => <Movie {...routerProps} />}
        />
        <PrivateRoute
          exact
          path={`${AppRoute.MOVIE}/:id${AppRoute.REVIEW}`}
          render={(routerProps) => <AddReview {...routerProps} />}
        />
        <Route exact path={`${AppRoute.PLAYER}/:id`}>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    poster: PropTypes.string.isRequired,
    backgroundPicture: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundPicture: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
