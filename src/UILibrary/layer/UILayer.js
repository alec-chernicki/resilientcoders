import React, { PropTypes } from 'react';
import styles from './UILayer.css';
import CSSModules from 'react-css-modules';
import UIImage from 'UILibrary/image/UIImage';
import classNames from 'classnames';

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
    const { image, greyscale, imageClass, styles } = this.props;

    if (!image) {
      return null;
    }

    const imagePrimaryClass = classNames({
      'image-greyscale': greyscale === true,
      'image-unstyled': greyscale === false,
    });

    const imageClasses = classNames(imagePrimaryClass, imageClass);

    return (
      <UIImage
        type="cover"
        className={imageClasses}
        src={image}
      />
    );
  }
  render () {
    const { index, children, className } = this.props;

    return (
      <div
        styleName="layer"
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
};

UILayer.propTypes = {
  image: PropTypes.string,
  dots: PropTypes.bool,
  overlay: PropTypes.bool,
  index: PropTypes.number,
  greyscale: PropTypes.bool,
}

export default CSSModules(UILayer, styles);
