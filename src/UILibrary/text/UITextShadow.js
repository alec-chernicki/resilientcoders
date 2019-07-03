import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './UITextShadow.css';

const UITextShadow = ({text, isActive, children, colorHack}) => {
  const textShadowClass = classNames({
    'inactive': !isActive,
    'active': isActive
  })

  return (
    <span styleName={textShadowClass} className={colorHack ? styles.colorHack : null} title={text || children}>
      {children}
    </span>
  )
};

UITextShadow.defaultProps = {
  isActive: false,
  colorHack: false,
};

UITextShadow.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default CSSModules(UITextShadow, styles);
