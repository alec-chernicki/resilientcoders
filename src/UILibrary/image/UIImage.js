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
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad() {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    const { src, type, className } = this.props;
    const { isLoaded } = this.state;
    const imageClass = classNames({
      default: type === typeProps.default,
      responsive: type === typeProps.responsive,
      cover: type === typeProps.cover,
      loaded: isLoaded
    });

    return (
      <div styleName="wrapper">
        <img
          onLoad={this.handleLoad}
          className={className}
          styleName={imageClass}
          role="presentation"
          src={src}
        />
      </div>
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

export default CSSModules(UIImage, styles, {allowMultiple: true});
