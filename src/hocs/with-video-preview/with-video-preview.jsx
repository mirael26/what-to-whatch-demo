import React, {PureComponent} from 'react';
import VideoPlayer from "../../components/video-player/video-player";
import withVideo from "../with-video/with-video";

const VideoPlayerWithVideo = withVideo(VideoPlayer);

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
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
            <VideoPlayerWithVideo
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

  WithVideoPreview.propTypes = {};

  return WithVideoPreview;
};

export default withVideoPreview;
