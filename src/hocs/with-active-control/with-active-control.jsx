import React, {PureComponent} from "react";

const withActiveControl = (Component) => {
  class WithActiveControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        currentTime: 0,
      };

      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
      this.setCurrentTime = this.setCurrentTime.bind(this);
      this.changeTime = this.changeTime.bind(this);
    }

    onPlayButtonClick() {
      const isPlaying = this.state.isPlaying;
      this.setState({
        isPlaying: !isPlaying,
      });
    }

    setCurrentTime(currentTime) {
      this.setState({
        currentTime,
      });
    }

    changeTime(newTime) {
      this.setState({
        currentTime: newTime,
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
          currentTime={this.state.currentTime}
          setCurrentTime={this.setCurrentTime}
          changeTime={this.changeTime}
        >
        </Component>
      );
    }
  }

  return WithActiveControl;
};

export default withActiveControl;


