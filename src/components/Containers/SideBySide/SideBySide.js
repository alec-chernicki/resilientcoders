import './SideBySide.scss';
import React from 'react';
import classNames from 'classnames';
import CenteredContainerOuter from '../CenteredContainer/CenteredContainerOuter';

const SideBySide = ({children, color, id, className, animatable}) => {
  const SideBySideClass = classNames('side-by-side', className, {
    'side-by-side--animatable': animatable === true
  })
  return (
    <CenteredContainerOuter color={color} id={id}>
      <div className={SideBySideClass}>
        <div className="side-by-side-container">
          {children}
        </div>
      </div>
    </CenteredContainerOuter>
  )
}

export default SideBySide;
