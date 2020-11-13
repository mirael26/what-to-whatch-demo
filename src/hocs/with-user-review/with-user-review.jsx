import React, {PureComponent} from "react";

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
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
      this.setState({rate: +evt.target.value});
    }

    onTextChange(evt) {
      this.setState({reviewText: evt.target.value});
    }

    render() {
      return (
        <Component
          currentRate={this.state.rate}
          reviewText={this.state.reviewText}
          onRateChange={this.onRateChange}
          onTextChange={this.onTextChange}
        />
      );
    }
  }

  return WithUserReview;
};

export default withUserReview;
