import './VideoPlayer.scss';
import videoJS from 'video.js';
import 'videojs-youtube';
import React, {PropTypes} from 'react';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoPlayer = null;
  }
  componentDidMount() {
    this.videoPlayer = videoJS(this.videoElement, {
      techOrder: ['youtube'],
      controls: 'false',
      autoplay: 'true',
      muted: 'true',
      loop: 'true',
      sources: [{
        type: 'video/youtube',
        src: this.props.url
      }]
    });
  }
  componentWillUnmount() {
    this.videoPlayer.dispose();
    this.videoPlayer = null;
  }
  onVideoClose() {
    this.props.onClose();
  }
  setVideoElementRef(element) {
    this.videoElement = element;
  }
  render() {
    return (
      <div className="fullscreen-video">
        <div
          className="video-close js-video-close"
          onClick={this.onVideoClose.bind(this)}/>
        <video
          ref={this.setVideoElementRef.bind(this)}
          className="video-js vjs-default-skin"
          controls
          autoPlay>
        </video>
        <p className=".vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web
          browser that
          <a href="http://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video</a>
        </p>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default VideoPlayer;
