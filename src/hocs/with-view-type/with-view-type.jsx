import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieViewTypes} from "../../const";

const withViewType = (Component) => {
  class WithViewType extends PureComponent {
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
      const {viewType} = this.state.viewType;

      return (
        <Component
          {...this.props}
          viewType={this.state.viewType}
          onViewNavClick={this.onViewNavClick}
        />
      );
    }
  }

  WithViewType.propTypes = {
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
      videoSrc: PropTypes.string.isRequired,
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

  return WithViewType;
};

export default withViewType;
