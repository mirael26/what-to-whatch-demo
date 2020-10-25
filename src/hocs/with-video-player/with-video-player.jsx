import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };
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
              onVideoMouseOver={() => {
                console.log(`play`);
                this.setState({
                  isPlaying: true
                });
              }}
              onVideoMouseOut={() => this.setState({
                isPlaying: false
              })}
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
