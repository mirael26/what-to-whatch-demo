import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {fetchCurrentFilm} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {AppRoute} from "../../const";

import UserBlock from "../user-block/user-block";
import AddReviewForm from "../add-review-form/add-review-form";
import withUserReview from "../../hocs/with-user-review/with-user-review";
import {postReview} from "../../store/api-actions";

const AddReviewFormWithUserReview = withUserReview(AddReviewForm);

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {currentFilm, match, loadCurrentFilm} = this.props;
    const {params: {id}} = match;
    const filmId = parseInt(id, 10);

    if (filmId !== currentFilm.id) {
      loadCurrentFilm(filmId);
    }
  }

  render() {
    const {currentFilm, errorStatus, resetErrorStatus, onSubmit} = this.props;
    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundPicture} alt={currentFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.MOVIE}/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            {<UserBlock />}
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentFilm.poster} alt={currentFilm.title} width="218" height="327" />
          </div>
        </div>

        <AddReviewFormWithUserReview
          background={currentFilm.backgroundColor}
          errorStatus={errorStatus}
          onInputChange={resetErrorStatus}
          currentFilmId={currentFilm.id}
          onSubmit={onSubmit}
        />

      </section>
    );
  }
}

AddReview.propTypes = {
  currentFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    picture: PropTypes.string,
    poster: PropTypes.string,
    backgroundPicture: PropTypes.string,
    rate: PropTypes.number,
    voteCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    previewVideoSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  match: PropTypes.object.isRequired,
  loadCurrentFilm: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  resetErrorStatus: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  currentFilm: DATA.currentFilm,
  errorStatus: STATE.errorStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
  resetErrorStatus() {
    dispatch(ActionCreator.updateErrorStatus(false));
  },
  onSubmit(id, review) {
    dispatch(postReview(id, review));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
