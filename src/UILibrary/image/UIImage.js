import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './UIImage.css';

const typeProps = {
  'default': 'default',
  'responsive': 'responsive',
  'cover': 'cover',
};

class UIImage extends React.Component {
  renderImage() {
    const { src, className, height, width, type } = this.props;
    const imageClass = classNames({
      [typeProps.default]: type === typeProps.default,
      [typeProps.responsive]: type === typeProps.responsive,
      [typeProps.cover]: type === typeProps.cover,
    });

    return (
      <img
        src={src}
        height={height}
        width={width}
        className={className}
        styleName={imageClass}
        role="presentation"
      />
  );
  }
  renderImageCover () {
    const { src, className, height, width } = this.props;

    return (
      <div styleName="image-container">
        <img
          height={height}
          width={width}
          className={className}
          styleName="cover"
          role="presentation"
          src={src}
        />
      </div>
    );
  }
  render () {
    const { type } = this.props;

    if (type === typeProps.cover) {
      return this.renderImageCover()
    }

    return this.renderImage();
  }
}

UIImage.defaultProps = {
  type: typeProps.default
};

UIImage.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CSSModules(UIImage, styles);
