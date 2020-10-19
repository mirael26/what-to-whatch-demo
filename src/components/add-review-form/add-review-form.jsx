import React, {PureComponent} from "react";

const MAX_RATE = 5;

class AddReviewForm extends PureComponent {
  constructor() {
    super();

    this.state = {
      rate: 1,
      reviewText: ``,
    };

    this.onRateChange = this.onRateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onRateChange(evt) {
    this.setState({rate: evt.target.value});
  }

  onTextChange(evt) {
    this.setState({reviewText: evt.target.value});
  }

  render() {
    const currentRate = parseInt(this.state.rate, 10);

    return (
      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {new Array(MAX_RATE).fill().map((element, i) => {
                const rate = i + 1;
                return <React.Fragment key={`${rate}`}>
                  <input className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate} checked={rate === currentRate ? true : false} onChange={this.onRateChange}/>
                  <label className="rating__label" htmlFor={`star-${rate}`}>Rating {rate}</label>
                </React.Fragment>;
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.onTextChange}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default AddReviewForm;
