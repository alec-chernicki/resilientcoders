import React, { PropTypes } from 'react';
import styles from './UILayer.css';
import CSSModules from 'react-css-modules';
import UIImage from 'UILibrary/image/UIImage';
import classNames from 'classnames';

const typeProps = {
  'default': 'default',
  'primary': 'primary',
  'secondary': 'secondary',
};

class UILayer extends React.Component {
  renderOverlay() {
    const { overlay } = this.props;

    if (!overlay) {
      return null;
    }

    return (
      <div styleName="overlay" />
    );
  }

  renderDots() {
    const { dots } = this.props;

    if (!dots) {
      return null;
    }

    return (
      <div styleName="dots" />
    );
  }

  renderImage() {
    const { image, greyscale, imageClass } = this.props;

    if (!image) {
      return null;
    }

    const imagePrimaryClass = classNames({
      'image-greyscale': greyscale === true,
      'image-unstyled': greyscale === false,
    });

    return (
      <UIImage
        type="cover"
        className={imageClass}
        styleName={imagePrimaryClass}
        src={image}
      />
    );
  }
  render () {
    const { index, children, className, type } = this.props;

    const layerClass = classNames({
      [typeProps.default]: type === typeProps.default,
      [typeProps.primary]: type === typeProps.primary,
      [typeProps.secondary]: type === typeProps.secondary,
    });

    return (
      <div
        styleName={layerClass}
        className={className}
        style={{ zIndex: index }}
      >
        {this.renderDots()}
        {this.renderOverlay()}
        {this.renderImage()}
        {children}
      </div>
    );
  }
}

UILayer.defaultProps = {
  index: 1,
  dots: true,
  overlay: true,
  greyscale: true,
  type: typeProps.default
};

UILayer.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  dots: PropTypes.bool,
  overlay: PropTypes.bool,
  index: PropTypes.number,
  greyscale: PropTypes.bool,
}

export default CSSModules(UILayer, styles);
