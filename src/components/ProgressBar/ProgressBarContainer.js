import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProgressBarContainer.css';

const ProgressBarContainer = ({children, className, style}) => {
  return (
    <div styleName="progress-bar-container" className={className} style={style}>
      {children}
    </div>
  )
}

export default CSSModules(ProgressBarContainer, styles);
