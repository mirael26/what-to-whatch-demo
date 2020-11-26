import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchCurrentFilm} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {debounce} from "../../utils";

import TimeBar from "../time-bar/time-bar";

const DEFAULT_RUN_TIME = 5400;

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
    this.fullscreenButtonRef = createRef();
    this.duration = DEFAULT_RUN_TIME;

    this.handleFullscreenButtonClick = this.handleFullscreenButtonClick.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  componentDidMount() {
    const {loadCurrentFilm} = this.props;
    loadCurrentFilm(this.getFilmId());

    const video = this.videoRef.current;
    video.addEventListener(`durationchange`, () => this.handleDurationChange());
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.loadCurrentFilm(this.getFilmId());
    }

    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.changePlayMode();
    }
  }

  getFilmId() {
    const {match} = this.props;
    const {params: {id}} = match;
    return parseInt(id, 10);
  }

  changePlayMode() {
    const {isPlaying} = this.props;
    const video = this.videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  handleFullscreenButtonClick() {
    const video = this.videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  handleTimeUpdate() {
    const currentTime = this.videoRef.current.currentTime;
    const {setCurrentTime} = this.props;
    setCurrentTime(currentTime);
  }

  handleDurationChange() {
    this.duration = this.videoRef.current.duration;
    const {onPlayButtonClick} = this.props;
    onPlayButtonClick();
  }

  changeTime(newTime) {
    this.videoRef.current.currentTime = newTime;
  }

  render() {
    const {
      currentFilm,
      onExitButtonClick,
      isPlaying,
      onPlayButtonClick,
    } = this.props;

    return (
      <div className="player">
        <video
          src={currentFilm.videoSrc}
          className="player__video"
          ref={this.videoRef}
          onTimeUpdate={debounce(this.handleTimeUpdate, 1000)}></video>

        <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

        <div className="player__controls">
          <TimeBar
            runTime={this.duration}
            onTimeChange={this.changeTime}
            onPlayModeChange={onPlayButtonClick}
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
              ref={this.fullscreenButtonRef}
              onClick={this.handleFullscreenButtonClick}>
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
  setCurrentTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  currentFilm: DATA.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
  setCurrentTime(time) {
    dispatch(ActionCreator.setPlayerTime(time));
  }
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
