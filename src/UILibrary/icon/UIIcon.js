import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './UIIcon.css';

class UIIcon extends React.Component {
  render () {
    const { image, align, className, height, width } = this.props;
    const iconStyles = {
      verticalAlign: align
    };

    return (
      <span
        className={className}
        styleName="icon"
        style={iconStyles}
      >
        <img
          styleName="image"
          role="presentation"
          src={image}
          height={height}
          width={width}
        />
      </span>
    );
  }
}

UIIcon.defaultProps = {
  height: 20
};

UIIcon.propTypes = {
  image: PropTypes.string.isRequired,
  align: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default CSSModules(UIIcon, styles);
