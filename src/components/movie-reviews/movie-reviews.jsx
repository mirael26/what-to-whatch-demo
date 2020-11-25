import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import {connect} from "react-redux";

import {fetchReviews} from "../../store/api-actions";

class MovieReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, loadReviews} = this.props;

    loadReviews(id);
  }

  render() {
    const {reviews} = this.props;
    const reviewsCount = reviews.length;
    const isReviews = reviewsCount !== 0;

    return !isReviews ? null : (
      <div className="movie-card__reviews movie-card__row">

        <div className="movie-card__reviews-col">
          {
            reviews
              .slice(0, Math.ceil(reviewsCount / 2))
              .map((review) =>
                <div className="review" key={`${review.id}-${review.author}`}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={review.date}>{dayjs(review.date).format(`MMMM D, YYYY`)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rate.toFixed(1)}</div>
                </div>
              )
          }
        </div>

        <div className="movie-card__reviews-col">
          {
            reviews
              .slice(0, Math.floor(reviewsCount / 2))
              .map((review) =>
                <div className="review" key={`${review.id}-${review.author}`}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={review.date}>{dayjs(review.date).format(`MMMM D, YYYY`)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rate}</div>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    film: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      rate: PropTypes.number,
      author: PropTypes.string,
      date: PropTypes.string,
    })),
  })),
  id: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(fetchReviews(id));
  }
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
