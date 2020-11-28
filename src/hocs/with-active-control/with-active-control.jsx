import React, {PureComponent} from "react";

const withActiveControl = (Component) => {
  class WithActiveControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    }

    handlePlayButtonClick() {
      const isPlaying = this.state.isPlaying;
      this.setState({
        isPlaying: !isPlaying,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onPlayButtonClick={this.handlePlayButtonClick}
        >
        </Component>
      );
    }
  }

  return WithActiveControl;
};

export default withActiveControl;


