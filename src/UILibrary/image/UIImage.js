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
  render () {
    const { src, type, className } = this.props;
    const imageClass = classNames({
      default: type === typeProps.default,
      responsive: type === typeProps.responsive,
      cover: type === typeProps.cover,
    });

    return (
      <img
        className={className}
        styleName={imageClass}
        role="presentation"
        src={src}
      />
    );
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
