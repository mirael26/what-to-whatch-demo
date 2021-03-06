import React, {PureComponent} from "react";
import {MovieViewType} from "../../const";

const withViewType = (Component) => {
  class WithViewType extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        viewType: MovieViewType.OVERVIEW
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(evt) {
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
          onTabClick={this.handleTabClick}
        />
      );
    }
  }

  return WithViewType;
};

export default withViewType;
