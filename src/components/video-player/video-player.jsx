import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_TIME_OUT = 1000;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timerId = null;

    this.state = {
      isLoading: true,
      timerId: null
    };
  }

  componentDidMount() {
    const {videoSrc, poster} = this.props;
    const video = this._videoRef.current;

    video.src = videoSrc;
    video.poster = poster;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }

  render() {
    const {onVideoMouseOver, onVideoMouseOut} = this.props;

    return (
      <Fragment>
        <div className="small-movie-card__image" onMouseOver={onVideoMouseOver} onMouseOut={onVideoMouseOut}>
          <video width="280" height="175"
            ref={this._videoRef}
            muted={true}
          />
        </div>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const playVideo = () => video.play();

    if (this.props.isPlaying) {
      this._timerId = setTimeout(playVideo, VIDEO_TIME_OUT);
    } else {
      clearTimeout(this._timerId);
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  onVideoMouseOver: PropTypes.func.isRequired,
  onVideoMouseOut: PropTypes.func.isRequired,
};
