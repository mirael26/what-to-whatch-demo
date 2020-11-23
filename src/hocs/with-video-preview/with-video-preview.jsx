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
        renderPlayer={(previewVideoSrc, poster) => {
          return (
            <VideoPlayerWithVideo
              previewVideoSrc={previewVideoSrc}
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
