import React, { Component } from 'react'
import HeroVideoItem from './hero-video.mp4';
import videoJS from 'video.js';

class HeroVideo extends Component {
  constructor(props) {
    super(props);

    this.videoPlayer = null;
  }
  componentDidMount() {
    this.videoPlayer = videoJS(this.getVideoId(), {
      muted: true
    });
  }
  componentWillUnmount() {
    this.videoPlayer.dispose();
    this.videoPlayer = null;
  }
  getVideoId() {
    return HeroVideoItem.substring(0, HeroVideoItem.indexOf('.'));
  }
  render () {
    return (
      <div className="video-container hero__image">
        <video
          id={this.getVideoId()}
          preload="preload"
          poster="data:image/gif,AAAA"
          autoPlay
          muted="muted"
          loop="loop"
        >
          <source type="video/mp4" src={HeroVideoItem}/>
        </video>
      </div>
    )
  }
}

export default HeroVideo;
