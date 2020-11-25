import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {formatPlayerTimer} from "../../utils";

class TimeBar extends PureComponent {
  constructor(props) {
    super(props);

    this._slider = createRef();
    this._progressBar = createRef();
    this._startCoord = null;
    this._endCoord = null;
    this._shift = null;
    this._isPauseForced = null;
    this._isLaunched = false;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidUpdate() {
    if (this._isLaunched) {
      return;
    }
    const {currentTime} = this.props;
    this._isLaunched = currentTime > 0;
  }

  onMouseDown(evt) {
    evt.preventDefault();
    this._startCoord = evt.clientX;
    document.addEventListener(`mousemove`, this.onMouseMove);
    document.addEventListener(`mouseup`, this.onMouseUp);

    const {changePlayMode, isPlaying} = this.props;
    if (isPlaying) {
      changePlayMode();
      this._isPauseForced = true;
    }
  }

  onMouseMove(evt) {
    evt.preventDefault();
    this._endCoord = evt.clientX;
    const minCoord = this._progressBar.current.getBoundingClientRect().left;
    const maxCoord = this._progressBar.current.getBoundingClientRect().right;
    if (this._endCoord < minCoord) {
      this._endCoord = minCoord;
    }
    if (this._endCoord > maxCoord) {
      this._endCoord = maxCoord;
    }
    this._shift = this._endCoord - this._startCoord;
    this._startCoord = this._endCoord;
    const slider = this._slider.current;
    const newSliderPoint = slider.offsetLeft + this._shift;
    slider.style.left = `${newSliderPoint}px`;
    const progressBar = this._progressBar.current;
    progressBar.value = `${newSliderPoint / progressBar.clientWidth * 100}`;
  }

  onMouseUp(evt) {
    evt.preventDefault();
    const progressBarWidth = this._progressBar.current.clientWidth;
    const newFilmPoint = (this._slider.current.offsetLeft / progressBarWidth).toFixed(3);
    this._newTime = this.props.runTime * newFilmPoint;

    const {changeTime} = this.props;
    changeTime(this._newTime);

    document.removeEventListener(`mousemove`, this.onMouseMove);
    document.removeEventListener(`mouseup`, this.onMouseUp);

    const {changePlayMode} = this.props;
    if (this._isPauseForced) {
      changePlayMode();
    }
    this._isPauseForced = null;
  }

  render() {
    const {currentTime, runTime} = this.props;
    const timer = formatPlayerTimer(currentTime);
    const progressInPercents = (currentTime / runTime * 100);
    const progress = progressInPercents.toFixed(1);

    return (
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progress} max="100" ref={this._progressBar}></progress>
          <div
            className="player__toggler"
            style={{left: `${progress}%`}}
            ref={this._slider}
            onMouseDown={this._isLaunched ? this.onMouseDown : null}
          >Toggler</div>
        </div>
        <div className="player__time-value">{timer}</div>
      </div>
    );
  }
}

TimeBar.propTypes = {
  currentTime: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  changeTime: PropTypes.func.isRequired,
  changePlayMode: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = ({STATE}) => ({
  currentTime: STATE.playerTime,
});

export {TimeBar};
export default connect(mapStateToProps)(TimeBar);
