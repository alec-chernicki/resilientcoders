import { partial } from 'underscore';
import classNames from 'classnames';
import React, { PropTypes } from 'react';
import styles from './UIOverlay.css';
import CSSModules from 'react-css-modules';

class UIOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    }

    this.setIsHovered = this.setIsHovered.bind(this);
  }
  setIsHovered(isHovered) {
    this.setState({ isHovered });
  }
  render () {
    const { isHovered } = this.state;
    const { text, isActive, className } = this.props;
    const overlayClass = classNames({
      'inactive': !isActive && !isHovered,
      'active': isActive || isHovered,
    });

    return (
      <div
        onMouseEnter={partial(this.setIsHovered, true)}
        onMouseLeave={partial(this.setIsHovered, false)}
        styleName={overlayClass}
        className={`accent-link-underline-trigger ${className}`}
      >
        <p styleName="text" className="accent-link-underline">
          {text}
        </p>
      </div>
    );
  }
}

UIOverlay.defaultProps = {
  isActive: false,
};

UIOverlay.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default CSSModules(UIOverlay, styles);
