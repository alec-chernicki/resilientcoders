import React, { PropTypes } from 'react';
import styles from './ButtonBase.css';
import CSSModules from 'react-css-modules';
import UIIcon from '../../icon/UIIcon';
import classNames from 'classnames';

const buttonUseProps = {
  'primary': 'primary',
};

class Button extends React.Component {
  render () {
    const { image, children, className, use } = this.props;
    const buttonClass = classNames({
      'button-primary': use === buttonUseProps.primary,
    });

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
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  use: PropTypes.oneOf(Object.keys(buttonUseProps)),
  className: PropTypes.string,
};

Button.defaultProps = {
  use: 'primary',
}

export default CSSModules(Button, styles);
