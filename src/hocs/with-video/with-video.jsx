import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_TIME_OUT = 1000;

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._timerId = null;

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      const {previewVideoSrc, poster} = this.props;
      const video = this._videoRef.current;

      video.src = previewVideoSrc;
      video.poster = poster;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
    }

    componentDidUpdate(prevProps) {
      const video = this._videoRef.current;
      if (prevProps.isPlaying === this.props.isPlaying) {
        return;
      }

      const playVideo = () => video.play();

      if (this.props.isPlaying || this.state.isLoading) {
        this._timerId = setTimeout(playVideo, VIDEO_TIME_OUT);
      } else {
        clearTimeout(this._timerId);
        video.load();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <video width="280" height="175"
            ref={this._videoRef}
            muted
          />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
    onVideoMouseOver: PropTypes.func.isRequired,
    onVideoMouseOut: PropTypes.func.isRequired,
  };

  return WithVideo;
};

export default withVideo;


