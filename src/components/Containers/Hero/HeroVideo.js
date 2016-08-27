import React, { Component } from 'react'
import videoJS from 'video.js';

class HeroVideo extends Component {
  constructor(props) {
    super(props);

    this.videoPlayer = null;
  }
  componentDidMount() {
    this.videoPlayer = videoJS(this.videoElement, {
      controls: 'false',
      autoplay: 'true',
      muted: 'true',
      loop: 'true',
    });
  }
  componentWillUnmount() {
    this.videoPlayer.dispose();
    this.videoPlayer = null;
  }
  setVideoElementRef(element) {
    this.videoElement = element;
  }
  render () {
    return (
      <div className="video-container hero__image">
        <video
          ref={this.setVideoElementRef.bind(this)}
          preload="preload"
          poster="data:image/gif,AAAA"
          autoPlay
        >
          <source type="video/mp4" src='https://s3.amazonaws.com/resilient-coders/hero-video.mp4'/>
        </video>
      </div>
    )
  }
}

export default HeroVideo;
