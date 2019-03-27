import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIVideoPlayer.css'
import CSSModules from 'react-css-modules';
import { Player } from 'video-react';

class UIVideoPlayer extends React.Component {
  componentDidUpdate() {
    if(!this.player) {
      return;
    }
    this.player.subscribeToStateChange(this.handleStateChange);
  }
  render() {
    const { poster, src, autoPlay, styles } = this.props;

    return (
      <Player
        className={styles['player']}
        fluid={false}
        autoPlay={autoPlay}
        playsInline={true}
        poster={poster}
        src={src}
      />
    );
  }
}

UIVideoPlayer.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default CSSModules(UIVideoPlayer, styles);
