import React, {PureComponent} from "react";

const FILMS_COUNT_STEP = 8;

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        filmsCount: FILMS_COUNT_STEP,
      };

      this.onShowMoreButton = this.onShowMoreButton.bind(this);
    }

    onShowMoreButton() {
      const prevCount = this.state.filmsCount;
      this.setState({
        filmsCount: prevCount + FILMS_COUNT_STEP,
      });
    }

    render() {
      return (
        <Component
          filmsCount={this.state.filmsCount}
          onShowMoreButton={this.onShowMoreButton}
        />
      );
    }
  }

  return WithShowMore;
};

export default withShowMore;
