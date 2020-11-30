import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MIN_REVIEW_TEXT_LENGTH = 50;
const MAX_REVIEW_TEXT_LENGTH = 400;

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
        reviewText.length > MIN_REVIEW_TEXT_LENGTH
        && reviewText.length <= MAX_REVIEW_TEXT_LENGTH
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

  return WithUserReview;
};

export default withUserReview;
