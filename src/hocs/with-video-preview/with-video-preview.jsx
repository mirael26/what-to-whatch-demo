import React, {PureComponent} from 'react';
import Preview from "../../components/preview/preview";
import withVideo from "../with-video/with-video";

const VideoPlayerWithVideo = withVideo(Preview);

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handleVideoMouseOver = this.handleVideoMouseOver.bind(this);
      this.handleVideoMouseOut = this.handleVideoMouseOut.bind(this);
    }

    handleVideoMouseOver() {
      this.setState({
        isPlaying: true
      });
    }

    handleVideoMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(previewVideoSrc, poster) => {
          return (
            <VideoPlayerWithVideo
              previewVideoSrc={previewVideoSrc}
              poster={poster}
              isPlaying={isPlaying}
              onVideoMouseOver={this.handleVideoMouseOver}
              onVideoMouseOut={this.handleVideoMouseOut}
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
