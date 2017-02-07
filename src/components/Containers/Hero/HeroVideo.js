import React, { Component } from 'react'
import videoJS from 'video.js';
import heroVideo from '../../../images/hero-video.mp4';
import heroVideoPreload from '../../../images/hero-video-preload.png';

class HeroVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-container hero__image">
        <video
          preload="auto"
          muted
          loop
          playsinline
          onCanPlayThrough={this.props.onLoad}
          poster="data:image/gif,AAAA"
          autoPlay
        >
          <source type="video/mp4" src={heroVideo}/>
        </video>
      </div>
    )
  }
}

export default HeroVideo;
