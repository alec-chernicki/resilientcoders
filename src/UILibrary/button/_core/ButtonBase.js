import React, { PropTypes } from 'react';
import styles from './ButtonBase.css';
import CSSModules from 'react-css-modules';
import UIIcon from '../../icon/UIIcon';
import classNames from 'classnames';

const buttonUseProps = {
  'primary': 'primary',
  'flat': 'flat'
};

class Button extends React.Component {
  render () {
    const { image, children, className, use, onClick } = this.props;
    const buttonClass = classNames({
      'button-primary': use === buttonUseProps.primary,
      'flat': use === buttonUseProps.flat,
    });

    if (use === buttonUseProps.flat) {
      return (
        <span className={className} styleName={buttonClass} onClick={onClick}>
          {children}
        </span>
      );
    }

    return (
      <div className={className} styleName={buttonClass}>
        <span styleName="content">
          {children}
        </span>
        <span styleName="icon-wrapper">
          <div styleName="animation-wrapper">
            <UIIcon image={image} />
          </div>
        </span>
      </div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf(Object.keys(buttonUseProps)),
  className: PropTypes.string,
};

Button.defaultProps = {
  use: 'primary',
}

export default CSSModules(Button, styles);
