import React, {PureComponent} from "react";
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
      const {viewType} = this.state;

      return (
        <Component
          {...this.props}
          viewType={viewType}
          onViewNavClick={this.onViewNavClick}
        />
      );
    }
  }

  return WithViewType;
};

export default withViewType;
