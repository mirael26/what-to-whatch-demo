import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";


const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoReleaseDate={promoReleaseDate}
            films={films}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    video: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    film: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default App;
