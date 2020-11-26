import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postReview} from "../../store/api-actions";

const RATING_RATE = 2;

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rate: 0,
        reviewText: ``,
        isSending: false,
      };

      this.isValid = false;

      this.handleRateChange = this.handleRateChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleRateChange(evt) {
      this.setState({rate: +evt.target.value});
      const {onInputChange} = this.props;
      onInputChange();
    }

    handleTextChange(evt) {
      this.setState({reviewText: evt.target.value});
      const {onInputChange} = this.props;
      onInputChange();
    }

    handleFormSubmit(evt) {
      const {onSubmit, currentFilmId} = this.props;

      evt.preventDefault();

      onSubmit(currentFilmId, {
        rating: this.state.rate * RATING_RATE,
        comment: this.state.reviewText,
      });

      this.setState({
        isSending: true,
      });
    }

    render() {
      const {reviewText, rate, isSending} = this.state;
      if (
        reviewText.length > 50
        && reviewText.length <= 400
        && rate > 0
      ) {
        this.isValid = true;
      }

      const isDisabled = Boolean(isSending || !this.isValid);

      return (
        <Component
          {...this.props}
          currentRate={rate}
          reviewText={reviewText}
          onRateChange={this.handleRateChange}
          onTextChange={this.handleTextChange}
          onFormSubmit={this.handleFormSubmit}
          isDisabled={isDisabled}
        />
      );
    }
  }

  WithUserReview.propTypes = {
    currentFilmId: PropTypes.number,
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({DATA}) => ({
    currentFilmId: DATA.currentFilm.id,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, review) {
      dispatch(postReview(id, review));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithUserReview);
};

export default withUserReview;
