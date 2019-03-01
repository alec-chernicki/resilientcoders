import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './UIImage.css';

const typeProps = {
  'default': 'default',
  'responsive': 'responsive',
  'cover': 'cover',
  'header': 'header',
  'inline': 'inline'
};

class UIImage extends React.Component {
  renderImage() {
    const { src, className, height, width, type, style, alt } = this.props;
    const imageClass = classNames({
      [typeProps.default]: type === typeProps.default,
      [typeProps.responsive]: type === typeProps.responsive,
      [typeProps.cover]: type === typeProps.cover,
      [typeProps.header]: type === typeProps.header,
      [typeProps.inline]: type === typeProps.inline,
    });

    return (
      <img
        style={style}
        src={src}
        height={height}
        width={width}
        className={className}
        styleName={imageClass}
        role="presentation"
        alt={alt}
      />
  );
  }
  renderImageCover () {
    const { src, className, height, width, alt } = this.props;

    return (
      <div styleName="image-container">
        <img
          height={height}
          width={width}
          className={className}
          styleName="cover"
          role="presentation"
          src={src}
          alt={alt}
        />
      </div>
    );
  }
  renderImageHeader () {
    const { src, className, alt } = this.props;
    let bgImage = { backgroundImage: `url(${src})` }

    return (
      <header styleName="image-header" style={ bgImage } role="presentation"/>
    )
  }
  renderImageInline () {
    const { src, className, alt, children } = this.props;
    
    return (
      <div styleName="inline-image-container">
        <img src={src} styleName="inline-image" role="presentation" alt={alt} />
        { children }
      </div>
    )
  }
  render () {
    const { type } = this.props;

    if (type === typeProps.cover) {
      return this.renderImageCover()
    } else if (type === typeProps.header) {
      return this.renderImageHeader()
    } else if (type === typeProps.inline) {
      return this.renderImageInline()
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
