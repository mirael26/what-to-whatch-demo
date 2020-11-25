import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute} from "../../const";
import {fetchFavoriteFilms} from "../../store/api-actions";

import MoviesList from "../movies-list/movies-list";
import UserBlock from "../user-block/user-block";

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {favoriteFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.MAIN} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          {<UserBlock />}
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {<MoviesList films={favoriteFilms}/>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  loadFavoriteFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(fetchFavoriteFilms());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
