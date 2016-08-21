import React from 'react';
import BinaryText from '../../../components/BinaryText/BinaryText';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const micahVideoUrl = 'https://youtu.be/JU1UunsFgpU';

class MicahVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlayerShown: false
    };
  }
  handleVideoOpen() {
    this.setState({isPlayerShown: true});
  }
  handleVideoClose() {
    this.setState({isPlayerShown: false});
  }
  renderVideoPlayer() {
    if (this.state.isPlayerShown) {
      return (<VideoPlayer
        url={micahVideoUrl}
        onClose={this
          .handleVideoClose
        .bind(this)}/>);
    }
    return null
  }
  render() {
    return (
      <div className="section-secondary section-micah">
        <div className="section-container-primary">
          <div
            className="video-play"
            onClick={this
            .handleVideoOpen
            .bind(this)}/>
          <div className="row">
            <div className="col-sm-6">
              <h1>
                <BinaryText>
                  MICAH'S STORY
                </BinaryText>
              </h1>
              <span className="divider divider__red"></span>
              <p>Micah was a young, aspiring coder, when we met him. Watch the crowdfunding
                video with which we were able to send him and another one of our coders, Fredy
                Melo, to Startup Institute. Today, Micah is a full stack web developer at the
                Boston Globe. As he says in the clip, he's just trying to make somebody to look
                up to.</p>

            </div>
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="video"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.renderVideoPlayer()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MicahVideo;
