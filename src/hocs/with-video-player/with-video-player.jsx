import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._onVideoMouseOver = this._onVideoMouseOver.bind(this);
      this._onVideoMouseOut = this._onVideoMouseOut.bind(this);
    }

    _onVideoMouseOver() {
      this.setState({
        isPlaying: true
      });
    }

    _onVideoMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(videoSrc, poster) => {
          return (
            <VideoPlayer
              videoSrc={videoSrc}
              poster={poster}
              isPlaying={isPlaying}
              onVideoMouseOver={this._onVideoMouseOver}
              onVideoMouseOut={this._onVideoMouseOut}
            />
          );
        }}
      />;
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
