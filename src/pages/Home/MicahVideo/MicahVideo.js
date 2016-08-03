import React, { PropTypes } from 'react';
import BinaryText from '../../../components/BinaryText/BinaryText';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import MicahMp4 from './home-video.mp4';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MicahVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlayerShown: false,
    };
  }
  handleVideoOpen() {
    this.setState({
      isPlayerShown: true,
    });
  }
  handleVideoClose() {
    this.setState({
      isPlayerShown: false,
    });
  }
  renderVideoPlayer() {
    if (this.state.isPlayerShown) {
      return (
        <VideoPlayer mp4={MicahMp4} onClose={this.handleVideoClose.bind(this)} />
      );
    }
    return null
  }
  render() {
    return (
      <div className="section-secondary section-micah">
        <div className="section-container-primary">
          <div className="video-play" onClick={this.handleVideoOpen.bind(this)} />
          <div className="row">
            <div className="col-sm-6">
              <h1>
                <BinaryText>
                  MICAH'S STORY
                </BinaryText>
              </h1>
              <span className="divider divider__red"></span>
              <p>Micah is an aspiring engineer. He's our Dev Lead at Resilient Lab, an initiative of Resilient Coders. Earlier this year, he and our Design Lead, Fredy Melo, were accepted into Startup Institute, an intensive 8-week bootcamp. They've since graduated and have begun working for other companies. Hear why web development is so important to Micah.</p>
            </div>
          </div>
        </div>
        <ReactCSSTransitionGroup transitionName="video" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {this.renderVideoPlayer()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MicahVideo;
