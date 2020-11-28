import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {formatPlayerTimer} from "../../utils";

class TimeBar extends PureComponent {
  constructor(props) {
    super(props);

    this.slider = createRef();
    this.progressBar = createRef();
    this.startCoord = null;
    this.endCoord = null;
    this.shift = null;
    this.isPauseForced = null;

    this.handleSliderMouseDown = this.handleSliderMouseDown.bind(this);
    this.handleDocumentMouseMove = this.handleDocumentMouseMove.bind(this);
    this.handleDocumentMouseUp = this.handleDocumentMouseUp.bind(this);
  }

  handleSliderMouseDown(evt) {
    evt.preventDefault();
    this.startCoord = evt.clientX;
    document.addEventListener(`mousemove`, this.handleDocumentMouseMove);
    document.addEventListener(`mouseup`, this.handleDocumentMouseUp);

    const {onPlayModeChange, isPlaying} = this.props;
    if (isPlaying) {
      onPlayModeChange();
      this.isPauseForced = true;
    }
  }

  handleDocumentMouseMove(evt) {
    evt.preventDefault();
    this.endCoord = evt.clientX;
    const minCoord = this.progressBar.current.getBoundingClientRect().left;
    const maxCoord = this.progressBar.current.getBoundingClientRect().right;
    if (this.endCoord < minCoord) {
      this.endCoord = minCoord;
    }
    if (this.endCoord > maxCoord) {
      this.endCoord = maxCoord;
    }
    this.shift = this.endCoord - this.startCoord;
    this.startCoord = this.endCoord;
    const slider = this.slider.current;
    const newSliderPoint = slider.offsetLeft + this.shift;
    slider.style.left = `${newSliderPoint}px`;
    const progressBar = this.progressBar.current;
    progressBar.value = `${newSliderPoint / progressBar.clientWidth * 100}`;
  }

  handleDocumentMouseUp(evt) {
    evt.preventDefault();
    const progressBarWidth = this.progressBar.current.clientWidth;
    const newFilmPoint = (this.slider.current.offsetLeft / progressBarWidth).toFixed(3);
    this._newTime = this.props.runTime * newFilmPoint;

    const {onTimeChange} = this.props;
    onTimeChange(this._newTime);

    document.removeEventListener(`mousemove`, this.handleDocumentMouseMove);
    document.removeEventListener(`mouseup`, this.handleDocumentMouseUp);

    const {onPlayModeChange} = this.props;
    if (this.isPauseForced) {
      onPlayModeChange();
    }
    this.isPauseForced = null;
  }

  render() {
    const {currentTime, runTime} = this.props;
    const timer = formatPlayerTimer(currentTime);
    const progressInPercents = (currentTime / runTime * 100);
    const progress = progressInPercents.toFixed(1);

    return (
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progress} max="100" ref={this.progressBar}></progress>
          <div
            className="player__toggler"
            style={{left: `${progress}%`}}
            ref={this.slider}
            onMouseDown={this.handleSliderMouseDown}
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
  onTimeChange: PropTypes.func.isRequired,
  onPlayModeChange: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = ({STATE}) => ({
  currentTime: STATE.playerTime,
});

export {TimeBar};
export default connect(mapStateToProps)(TimeBar);
