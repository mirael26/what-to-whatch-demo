import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchCurrentFilm} from "../../store/api-actions";

import TimeBar from "../time-bar/time-bar";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._fullscreenButtonRef = createRef();
    this._duration = 0;

    this.onFullscreenButtonClick = this.onFullscreenButtonClick.bind(this);
  }

  componentDidMount() {
    const {loadCurrentFilm} = this.props;
    loadCurrentFilm(this.getFilmId());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.loadCurrentFilm(this.getFilmId());
    }

    const video = this._videoRef.current;
    if (this.props.currentTime !== video.currentTime) {
      video.currentTime = this.props.currentTime;
    }

    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.changePlayMode();
      if (this.props.isPlaying) {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
      } else {
        clearInterval(this.timerID);
      }
    }

    this._duration = this._videoRef.current.duration;
  }

  getFilmId() {
    const {match} = this.props;
    const {params: {id}} = match;
    return parseInt(id, 10);
  }

  changePlayMode() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  onFullscreenButtonClick() {
    const video = this._videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  tick() {
    const {setCurrentTime} = this.props;
    setCurrentTime(this._videoRef.current.currentTime);
  }

  render() {
    const {
      currentFilm,
      onExitButtonClick,
      isPlaying,
      onPlayButtonClick,
      currentTime,
      changeTime,
    } = this.props;

    return (
      <div className="player">
        <video
          src={currentFilm.videoSrc}
          className="player__video"
          ref={this._videoRef}></video>

        <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

        <div className="player__controls">
          <TimeBar
            runTime={this._duration}
            currentTime={currentTime}
            changeTime={changeTime}
            changePlayMode={onPlayButtonClick}
            isPlaying={isPlaying}/>

          <div className="player__controls-row">
            {isPlaying
              ? <button type="button" className="player__play" onClick={onPlayButtonClick}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
              : <button type="button" className="player__play" onClick={onPlayButtonClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>}

            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              ref={this._fullscreenButtonRef}
              onClick={this.onFullscreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  currentFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    picture: PropTypes.string,
    poster: PropTypes.string,
    backgroundPicture: PropTypes.string,
    rate: PropTypes.number,
    voteCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    previewVideoSrc: PropTypes.string,
    videoSrc: PropTypes.string,
  }),
  match: PropTypes.object.isRequired,
  loadCurrentFilm: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  setCurrentTime: PropTypes.func.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  currentFilm: DATA.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  }
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
