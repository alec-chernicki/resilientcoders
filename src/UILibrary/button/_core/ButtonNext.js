import React, { PropTypes } from 'react';
import styles from './ButtonBase.css';
import CSSModules from 'react-css-modules';
import UIIcon from '../../icon/UIIcon';
import classNames from 'classnames';
import leftArrowImage from '../../../images/left-arrow.svg';
import rightArrowImage from '../../../images/right-arrow.svg';

const buttonUseProps = {
  'primary': 'primary',
};

class ButtonNext extends React.Component {
  render () {
    const { direction, className, use, onClick, disabled } = this.props;
    const buttonClass = classNames({
      'button-primary': use === buttonUseProps.primary,
    });
    const arrow = {
        'LEFT': leftArrowImage,
        'RIGHT': rightArrowImage,
    };
    const animateStyleName = direction === 'LEFT' ? "animation-wrapper-left" : "animation-wrapper";
    return (
      <div className={className} styleName={`${buttonClass}${disabled ? '-disabled' : ''}`} onClick={onClick} >
        <span styleName={`icon-next-wrapper`}>
          <div styleName={animateStyleName}>
            <UIIcon image={arrow[direction]} />
          </div>
        </span>
      </div>
    )
  }
}

ButtonNext.propTypes = {
  direction: PropTypes.string.isRequired,
  use: PropTypes.oneOf(Object.keys(buttonUseProps)),
  className: PropTypes.string,
};

ButtonNext.defaultProps = {
  use: 'primary',
}

export default CSSModules(ButtonNext, styles);
