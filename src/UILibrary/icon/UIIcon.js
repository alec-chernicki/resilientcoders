import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIIcon.css';

class UIIcon extends React.Component {
  render () {
    const { image, align, className, height, width } = this.props;
    const iconStyles = {
      verticalAlign: align
    };

    return (
      <div
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
      </div>
    );
  }
}

UIIcon.propTypes = {
  image: PropTypes.string.isRequired,
  align: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default CSSModules(UIIcon, styles);
