import React, {PureComponent} from "react";

const FILMS_COUNT_STEP = 8;

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        filmsCount: FILMS_COUNT_STEP,
      };

      this.handleShowMoreButton = this.handleShowMoreButton.bind(this);
    }

    handleShowMoreButton() {
      const prevCount = this.state.filmsCount;
      this.setState({
        filmsCount: prevCount + FILMS_COUNT_STEP,
      });
    }

    render() {
      return (
        <Component
          filmsCount={this.state.filmsCount}
          onShowMoreButtonClick={this.handleShowMoreButton}
        />
      );
    }
  }

  return WithShowMore;
};

export default withShowMore;
