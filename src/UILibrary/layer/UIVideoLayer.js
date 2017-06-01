import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIVideoLayer.css';
import UILayer from 'UILibrary/layer/UILayer';

class UIVideoLayer extends React.Component {
  render () {
    const { src, className } = this.props;

    return (
      <div styleName="video-layer" className={className}>
        <UILayer />
        <video
          preload="auto"
          muted
          autoPlay
          playsInline
          loop
        >
          <source type="video/mp4" src={src}/>
        </video>
      </div>
    );
  }
};

UIVideoLayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CSSModules(UIVideoLayer, styles);
