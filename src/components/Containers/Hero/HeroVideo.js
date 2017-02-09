import React, { Component } from 'react'
import heroVideo from '../../../images/hero-video.mp4';

const setCustomAttributes = (el) => {
  if (el) {
    el.setAttribute('playsinline', true);
    el.setAttribute('webkit-playsinline', true);
  }
};

class HeroVideo extends Component {
  render() {
    return (
      <div className="video-container hero__image">
        <video
          preload="auto"
          muted
          autoPlay
          playsInline
          loop
          onCanPlayThrough={this.props.onLoad}
          poster="data:image/gif,AAAA"
          ref={setCustomAttributes}
        >
          <source type="video/mp4" src={heroVideo}/>
        </video>
      </div>
    )
  }
}

export default HeroVideo;
