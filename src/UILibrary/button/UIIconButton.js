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

const layoutProps = {
  'inline': 'inline',
  'block': 'block'
}

class UIIconButton extends React.Component {
  render () {
    const { onClick, image, className, direction, size, layout } = this.props;
    const iconButtonClass = classNames('icon-button', {
      'animate-down': direction === directionProps.down,
      'animate-up': direction === directionProps.up,
      'animate-left': direction === directionProps.left,
      'animate-right': direction === directionProps.right,
      'size-small': size === sizeProps.small,
      'size-medium': size === sizeProps.medium,
      'size-large': size === sizeProps.large,
      'layout-inline': layout === layoutProps.inline,
      'layout-block': layout === layoutProps.block
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
  layout: PropTypes.oneOf(Object.keys(layoutProps)),
}

UIIconButton.defaultProps = {
  size: sizeProps.small,
  direction: directionProps.up,
  layout: layoutProps.block,
};

export default CSSModules(UIIconButton, styles, { allowMultiple: true });
