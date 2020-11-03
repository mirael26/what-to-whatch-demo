import React from "react";
import PropTypes from "prop-types";

const MAX_RATE = 5;

const AddReviewForm = (props) => {
  const {
    currentRate,
    reviewText,
    onRateChange,
    onTextChange,
  } = props;


  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {new Array(MAX_RATE).fill().map((element, i) => {
              const rate = i + 1;
              return <React.Fragment key={`${rate}`}>
                <input className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate} checked={rate === currentRate ? true : false} onChange={onRateChange}/>
                <label className="rating__label" htmlFor={`star-${rate}`}>Rating {rate}</label>
              </React.Fragment>;
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onTextChange} value={reviewText}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  currentRate: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
