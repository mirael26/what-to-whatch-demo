import React, {PureComponent} from "react";

const withActiveControl = (Component) => {
  class WithActiveControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    }

    onPlayButtonClick() {
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
          onPlayButtonClick={this.onPlayButtonClick}
          isFullscreen={this.state.isFullscreen}
          onFullScreenButtonClick={this.onFullScreenButtonClick}
        >
        </Component>
      );
    }
  }

  return WithActiveControl;
};

export default withActiveControl;


