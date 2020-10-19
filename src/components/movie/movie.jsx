import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {MovieViewTypes} from "../../const";
import {makeFirstUpperCase} from "../../utils";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";


class Movie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewType: MovieViewTypes.OVERVIEW
    };

    this.onViewNavClick = this.onViewNavClick.bind(this);
  }

  onViewNavClick(evt) {
    evt.preventDefault();
    if (!evt.target.id) {
      return;
    }
    this.setState({viewType: evt.target.id});
  }

  render() {
    const {films, reviews} = this.props;
    const currentFilm = films[1];
    const currentReviews = reviews[1].reviews;

    let movieComponent;
    switch (this.state.viewType) {
      case MovieViewTypes.DETAILS:
        movieComponent = <MovieDetails film={currentFilm} />;
        break;
      case MovieViewTypes.REVIEWS:
        movieComponent = <MovieReviews reviews={currentReviews} />;
        break;
      default:
        movieComponent = <MovieOverview film={currentFilm} />;
        break;
    }

    return (<React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.backgroundPicture} alt={currentFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link className="logo__link" to="/">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to="/player/1" className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to="/films/1/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.poster} alt={currentFilm.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list" onClick={this.onViewNavClick}>
                  {Object.values(MovieViewTypes).map((type, i) =>
                    <li className={`movie-nav__item${this.state.viewType === type ? ` movie-nav__item--active` : ``}`} key={`${i}-${type}`}>
                      <a href="#" className="movie-nav__link" id={type}>{makeFirstUpperCase(type)}</a>
                    </li>
                  )}
                </ul>
              </nav>

              {movieComponent}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {films
              .filter((film) => {
                return (film.genre === currentFilm.genre) && film !== currentFilm;
              })
              .map((film, i) => {
                return (
                  <article className="small-movie-card catalog__movies-card" key={`${i}-${film.title}`}>
                    <div className="small-movie-card__image">
                      <img src={film.picture} alt={film.title} width="280" height="175" />
                    </div>
                    <h3 className="small-movie-card__title">
                      <a className="small-movie-card__link" href="#">{film.title}</a>
                    </h3>
                  </article>
                );
              })}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

Movie.propTypes = {
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

export default Movie;
