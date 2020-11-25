import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchPromoFilm} from "../../store/api-actions";

import Catalog from "../catalog/catalog";
import UserBlock from "../user-block/user-block";
import withShowMore from "../../hocs/with-show-more/with-show-more";

const CatalogWithShowMore = withShowMore(Catalog);

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadPromoFilm} = this.props;
    loadPromoFilm();
  }

  render() {
    const {promoFilm, onPlayerButtonClick} = this.props;

    return (<React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.backgroundPicture} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          {<UserBlock />}
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster} alt={promoFilm.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayerButtonClick(promoFilm.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogWithShowMore/>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>);
  }
}

Main.propTypes = {
  promoFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    picture: PropTypes.string,
    poster: PropTypes.string,
    backgroundPicture: PropTypes.string,
    backgroundColor: PropTypes.string,
    rate: PropTypes.number,
    voteCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    previewVideoSrc: PropTypes.string,
  }),
  loadPromoFilm: PropTypes.func.isRequired,
  onPlayerButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  promoFilm: DATA.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
