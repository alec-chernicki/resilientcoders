import './SideBySide.scss';
import React from 'react';
import classNames from 'classnames';

const SideBySide = ({children, className}) => {
  const SideBySideClass = classNames('side-by-side', className)
  return (
    <div className={SideBySideClass}>
      {children}
    </div>
  )
}

export default SideBySide;
