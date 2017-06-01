import React, { PropTypes } from 'react';
import styles from './UIIconButton.css';
import CSSModules from 'react-css-modules';
import UIIcon from 'UILibrary/icon/UIIcon';
import classNames from 'classnames';

const directionProps = {
  'down': 'down',
  'up': 'up',
  'left': 'left',
  'right': 'right',
};

const sizeProps = {
  'small': 'small',
  'medium': 'medium',
  'large': 'large',
};

class UIIconButton extends React.Component {
  render () {
    const { onClick, image, className, direction, size } = this.props;
    const iconButtonClass = classNames('icon-button', {
      'animate-down': direction === directionProps.down,
      'animate-up': direction === directionProps.up,
      'animate-left': direction === directionProps.left,
      'animate-right': direction === directionProps.right,
      'size-small': size === sizeProps.small,
      'size-medium': size === sizeProps.medium,
      'size-large': size === sizeProps.large,
    });

    return (
      <a
        styleName={iconButtonClass}
        onClick={onClick}
        className={className}
      >
        <UIIcon image={image} />
      </a>
    );
  }
}

UIIconButton.propTypes = {
  direction: PropTypes.oneOf(Object.keys(directionProps)),
  size: PropTypes.oneOf(Object.keys(sizeProps)),
}

UIIconButton.defaultProps = {
  size: sizeProps.small,
  direction: directionProps.up,
};

export default CSSModules(UIIconButton, styles, { allowMultiple: true });
