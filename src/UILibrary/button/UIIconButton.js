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

class UIIconButton extends React.Component {
  render () {
    const { onClick, image, className, direction } = this.props;
    const iconButtonClass = classNames('icon-button', {
      'animate-down': direction === directionProps.down,
      'animate-up': direction === directionProps.up,
      'animate-left': direction === directionProps.left,
      'animate-right': direction === directionProps.right,
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

export default CSSModules(UIIconButton, styles, { allowMultiple: true });
