import './VideoPlayer.scss';
import videoJS from 'video.js';
import React, { PropTypes } from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.videoPlayer = null;
  }
  componentDidMount() {
    this.videoPlayer = videoJS(this.getVideoId());
  }
  componentWillUnmount() {
    this.videoPlayer.dispose();
  }
  onVideoClose() {
    this.props.onClose();
  }
  getVideoId() {
    const videoFileName = this.props.mp4 || this.props.webm;
    return videoFileName.substring(0, videoFileName.indexOf('.'));
  }
  render() {
    return (
      <div className="fullscreen-video">
        <div className="video-close js-video-close" onClick={this.onVideoClose.bind(this)} />
        <video
          id={this.getVideoId()}
          className="video-js vjs-default-skin"
          controls
          autoPlay
        >
          <source src={this.props.mp4} type="video/mp4" />
          <source src={this.props.webm} type="video/webm" />
        </video>
        <p className=".vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video</a>
        </p>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer;
