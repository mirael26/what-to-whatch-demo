import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const MovieReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {
          reviews.map((review, i) =>
            <div className="review" key={`${i}-${review.author}`}>
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime={review.date}>{moment(review.date).format(`LL`)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rate}</div>
            </div>
          )
        }
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
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

export default MovieReviews;
