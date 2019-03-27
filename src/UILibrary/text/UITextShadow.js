import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './UITextShadow.css';

const UITextShadow = ({text, isActive, children}) => {
  const textShadowClass = classNames({
    'inactive': !isActive,
    'active': isActive,
  })
  return (
    <span styleName={textShadowClass} title={text || children}>
      {children}
    </span>
  )
};

UITextShadow.defaultProps = {
  isActive: false,
};

UITextShadow.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default CSSModules(UITextShadow, styles);
